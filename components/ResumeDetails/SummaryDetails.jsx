'use client'
import React, { useContext, useEffect, useState } from 'react'
import { chatSessions } from '../../lib/GoogleGemniModel'
import { supabase } from '../../lib/supabaseconfig'
import Loader from '../Loader'
import toast from 'react-hot-toast'
import { ThemeContext } from '../../lib/Context'

const SummaryDetails = ({ ID }) => {
  const { theme, setTheme } = useContext(ThemeContext)
  const [loading, setLoading] = useState(false)

  // Function to set theme.Profile in local storage
  const setLocalStorageProfile = (profileValue) => {
    localStorage.setItem('themeProfile', profileValue)
  }

  const CreateDetails = async () => {
    const FeedBackPrompt = `Read the ${theme.profile} completely and then give a 3-6 line brief profile that the user can add in their resume. Just give back the brief profile for the given text and nothing else`

    const Gemni_Response = await chatSessions.sendMessage(FeedBackPrompt)
    const MockJsonResponse = Gemni_Response.response.text()

    try {
      const { data, error } = await supabase.from('Profile').insert({
        Description: MockJsonResponse,
        UserID: ID,
      })

      if (error) {
        console.error('Error inserting data:', error.message)
        toast.error('Failed to save profile data')
      } else {
        console.log('Data inserted successfully:', data)
        toast.success('Profile data saved successfully')
        setTheme((prev) => ({ ...prev, Profile: MockJsonResponse }))
      }
    } catch (err) {
      console.error('Unexpected error:', err)
      toast.error('Unexpected error occurred')
    }
  }

  const DeleteDetails = async () => {
    try {
      const { error } = await supabase.from('Profile').delete().eq('UserID', ID)

      if (error) {
        console.error('Error deleting data:', error.message)
        toast.error('Failed to delete profile data')
      } else {
        console.log('Data deleted successfully')
        setTheme((prev) => ({ ...prev, Profile: null })) // Clear profile state after deletion
        setLocalStorageProfile('') // Clear local storage
        toast.success('Profile data deleted successfully')
      }
    } catch (err) {
      console.error('Unexpected error:', err)
      toast.error('Unexpected error occurred')
    }
  }

  const getProfileData = async () => {
    try {
      const { data, error } = await supabase
        .from('Profile')
        .select('*')
        .eq('UserID', ID)

      if (data) {
        setTheme((prev) => ({ ...prev, Profile: data[0]?.Description }))
        setLoading(false)
        return null // Handle error state as per your application's needs
      } else {
        setTheme((prev) => ({ ...prev, Profile: null }))

        console.log(theme.Profile)
        setLoading(false)
      }
    } catch (err) {
      console.error('Unexpected error:', err)
      return null // Handle unexpected error state
    }
  }

  useEffect(() => {
    getProfileData()
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className="flex flex-col">
      <div className="flex-col flex">
        <label className="p-2">Write A Profile</label>
        <textarea
          value={theme.Profile}
          onChange={(e) =>
            setTheme((prev) => ({ ...prev, Profile: e.target.value }))
          }
          cols={10}
          rows={3}
          className="border-2 border-slate-700 rounded-lg p-2"
          placeholder="Provide Your Job Title, the projects you like to make and the skills you possess. Then AI will create a Profile for you. Write At least 1-2 lines for the AI to work properly"
        />
      </div>
      <div className="flex justify-end">
        <div className="flex justify-between gap-3">
          <button
            onClick={() => CreateDetails()}
            className="p-2 mt-5 bg-blue-500 rounded-lg text-white"
          >
            Create
          </button>
          <button
            onClick={() => DeleteDetails()}
            className="p-2 mt-5 bg-red-500 rounded-lg text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default SummaryDetails
