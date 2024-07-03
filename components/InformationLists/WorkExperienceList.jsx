'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { supabase } from '../../lib/supabaseconfig'
import { useRouter } from 'next/navigation'
import { Trash2 } from 'lucide-react'
const WorkExperienceList = ({ ID }) => {
  const [WorkData, SetData] = useState([])
  const getdata = async () => {
    try {
      const { data, error } = await supabase.from('WorkExperience').select('*')

      if (error) {
        console.error('Error inserting data:', error.message)
        alert('NO DATA SAVED')
      } else {
        SetData(data)
        console.log(data)
      }
    } catch (err) {
      console.error('Unexpected error:', err)
    }
  }
  useEffect(() => {
    getdata()
  }, [])
  const DeleteData = async (itemid) => {
    try {
      const { data, error } = await supabase
        .from('WorkExperience')
        .delete()
        .eq('id', itemid)

      if (error) {
        console.error('Error inserting data:', error.message)
        alert('NO DATA SAVED')
      } else {
        console.log('Data inserted successfully:', data)
        getdata()
      }
    } catch (err) {
      console.error('Unexpected error:', err)
    }
  }
  const router = useRouter()

  return (
    <div className=" flex flex-col gap-5 mt-5">
      {WorkData.map((element, index) => {
        return (
          <div
            className="p-3 bg-slate-200 rounded-lg flex flex-col cursor-pointer "
            key={index}
          >
            <div className=" flex justify-between">
              <div
                className=" flex font-bold "
                onClick={() => router.push(`/WorkExperience/${element.id}`)}
              >
                <h1 className=" capitalize">{element.Jobtitle}</h1>,
                <h1 className=" capitalize">{element.Company}</h1>
              </div>
              <Trash2 onClick={() => DeleteData(element.id)} />
            </div>
            <div className=" flex justify-between">
              <div
                className=" flex gap-2"
                onClick={() => router.push(`/WorkExperience/${element.id}`)}
              >
                <h1 className=" capitalize opacity-75">{element.StartDate}</h1>-
                <h1 className=" capitalize opacity-75">{element.EndDate}</h1>
              </div>
              <div
                className="flex gap-2 opacity-85"
                onClick={() => router.push(`/WorkExperience/${element.id}`)}
              >
                <h1 className=" capitalize">{element.State}</h1>,
                <h1 className=" capitalize">{element.Country}</h1>
              </div>
            </div>
          </div>
        )
      })}

      <button
        onClick={() => {
          router.push(`/CreateResumeData/${ID}/WorkExperience`)
        }}
        className=" text-black rounded-lg p-3 border-2 border-slate-400"
      >
        ADD More Work Experience
      </button>
    </div>
  )
}

export default WorkExperienceList
