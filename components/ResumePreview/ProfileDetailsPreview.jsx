'use client'
import React, { useEffect } from 'react'
import { chatSessions } from '../../lib/GoogleGemniModel'
import { useState } from 'react'
import { supabase } from '../../lib/supabaseconfig'
const ProfileDetailsPreview = ({ ID, theme }) => {
  const [profile, setProfile] = useState('')

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
  }, [profile])

  return (
    <div className={`flex flex-col mt-2 p-4 gap-2 border-b-2 ${theme.Border}`}>
      <h1 className=" font-bold text-lg">Profile</h1>
      <h1 className=" text-sm p-2">{profile}</h1>
    </div>
  )
}

export default ProfileDetailsPreview
