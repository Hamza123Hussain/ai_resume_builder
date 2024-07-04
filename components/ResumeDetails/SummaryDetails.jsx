'use client'
import React, { useEffect } from 'react'
import { chatSessions } from '../../lib/GoogleGemniModel'
import { useState } from 'react'
import { supabase } from '../../lib/supabaseconfig'
const SummaryDetails = ({ ID }) => {
  const [profile, setProfile] = useState('')
  const CreateDetails = async () => {
    const FeedBackPrompt = `Read the ${profile} completely and then give a 3-6 line breif profile that the user can add in their resume. Just give back the breif profile for the given text and nothing else `

    const Gemni_Response = await chatSessions.sendMessage(FeedBackPrompt)

    const MockJsonResponse = Gemni_Response.response.text()
    setProfile(MockJsonResponse)

    try {
      const { data, error } = await supabase.from('Profile').insert({
        Description: profile,
        UserID: ID,
      })

      if (error) {
        console.error('Error inserting data:', error.message)
        alert('NO DATA SAVED')
      } else {
        console.log('Data inserted successfully:', data)
      }
    } catch (err) {
      console.error('Unexpected error:', err)
    }
  }
  const UpdateDetails = async () => {
    const FeedBackPrompt = `Read the ${profile} completely and then give a 3-6 line breif profile that the user can add in their resume. Just give back the breif profile for the given text and nothing else `

    const Gemni_Response = await chatSessions.sendMessage(FeedBackPrompt)

    const MockJsonResponse = Gemni_Response.response.text()
    setProfile(MockJsonResponse)

    try {
      const { data, error } = await supabase
        .from('Profile')
        .update({
          Description: profile,
          UserID: ID,
        })
        .eq('UserID', ID)

      if (error) {
        // console.error('Error inserting data:', error.message)
        // alert('NO DATA SAVED')
      } else {
        console.log('Data inserted successfully:', data)
      }
    } catch (err) {
      console.error('Unexpected error:', err)
    }
  }
  const getdata = async () => {
    try {
      const { data, error } = await supabase
        .from('Profile')
        .select('*')
        .eq('UserID', ID)

      if (error) {
        // console.error('Error fetching data:', error.message)
        // alert('NO DATA SAVED')
      } else {
        console.log(data)
        if (data.length > 0) {
          setProfile(data[0].Description) // Assuming data is an array and you want the first item
        }
      }
    } catch (err) {
      console.error('Unexpected error:', err)
    }
  }

  useEffect(() => {
    getdata()
  }, [ID])

  return (
    <div className=" flex flex-col">
      <div className=" flex-col flex">
        <label className=" p-2">Write A Profile</label>
        <textarea
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
          cols={10}
          rows={3}
          className=" border-2 border-slate-700 rounded-lg p-2"
          placeholder="Provide Your Job Title, the projects you like to make and the skills you posses. Then AI will create a Profile for you. Write Atleast 1-2 lines for the AI to work properly"
        />
      </div>
      <div className=" flex justify-end">
        {profile !== '' ? (
          <button
            onClick={() => UpdateDetails()}
            className="p-2 mt-5 bg-blue-500 rounded-lg text-white"
          >
            Update
          </button>
        ) : (
          <button
            onClick={() => CreateDetails()}
            className="p-2 mt-5 bg-green-500 rounded-lg text-white"
          >
            Save
          </button>
        )}
      </div>
    </div>
  )
}

export default SummaryDetails
