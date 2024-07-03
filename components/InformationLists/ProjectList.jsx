'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { supabase } from '../../lib/supabaseconfig'
import { useRouter } from 'next/navigation'
import { Trash2 } from 'lucide-react'
const ProjectList = ({ ID }) => {
  const [ProjectData, SetData] = useState([])
  const Router = useRouter()
  const getdata = async () => {
    try {
      const { data, error } = await supabase.from('ProjectDetails').select('*')

      if (error) {
        console.error('Error inserting data:', error.message)
        alert('NO DATA SAVED')
      } else {
        SetData(data)
        console.log(data)
        Router.back()
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
        .from('ProjectDetails')
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

  return (
    <div className=" flex flex-col gap-5 mt-5">
      {ProjectData.map((element, index) => {
        return (
          <div
            className="p-3 bg-slate-200 rounded-lg flex flex-col cursor-pointer "
            key={index}
          >
            <div className=" flex justify-between">
              <div className=" flex font-bold ">
                <h1 className=" capitalize">{element.Name}</h1>,
                <h1 className=" capitalize">{element.Description}</h1>
              </div>
            </div>
          </div>
        )
      })}

      <button
        onClick={() => {
          Router.push(`/CreateResumeData/${ID}/Project`)
        }}
        className=" text-black rounded-lg p-3 border-2 border-slate-400"
      >
        ADD More Project Details
      </button>
    </div>
  )
}

export default ProjectList
