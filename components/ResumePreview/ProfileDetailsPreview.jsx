'use client'
import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../lib/Context'
import { supabase } from '../../lib/supabaseconfig'

const ProfileDetailsPreview = ({ ID }) => {
  const { theme, setTheme } = useContext(ThemeContext)
  const getProfileData = async () => {
    try {
      const { data, error } = await supabase
        .from('Profile')
        .select('*')
        .eq('UserID', ID)

      if (error) {
        console.error('Error fetching data:', error.message)
        return null // Handle error state as per your application's needs
      } else {
        setTheme((prev) => ({ ...prev, Profile: data[0]?.Description }))

        console.log(theme.Profile)
      }
    } catch (err) {
      console.error('Unexpected error:', err)
      return null // Handle unexpected error state
    }
  }
  useEffect(() => {
    getProfileData()
  }, [])
  return theme.Profile ? (
    <div className={`flex flex-col mt-2 p-4 gap-2 border-b-2 ${theme.Border}`}>
      <h1 className="font-bold text-lg">Profile</h1>
      <h1 className="text-sm p-2">{theme.Profile}</h1>
    </div>
  ) : (
    <></>
  )
}

export default ProfileDetailsPreview
