'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { supabase } from '../../lib/supabaseconfig'

const ProjectDetailsPreview = ({ ID }) => {
  const [ProjectData, SetData] = useState([])
  const getdata = async () => {
    try {
      const { data, error } = await supabase
        .from('ProjectDetails')
        .select('*')
        .eq('UserID', ID)

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
  }, [ProjectData])

  return (
    <div className="py-2 px-4">
      <h1 className=" font-bold text-xl">Projects</h1>
      {ProjectData.map((element, index) => {
        return (
          <div
            className=" py-2  rounded-lg flex flex-col cursor-pointer gap-1 "
            key={index}
          >
            <h1 className=" capitalize">{element.Name} </h1>
            <h1 className=" capitalize"> {element.Description}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectDetailsPreview
