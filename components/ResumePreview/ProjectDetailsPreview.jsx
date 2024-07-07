'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { supabase } from '../../lib/supabaseconfig'

const ProjectDetailsPreview = ({ ID }) => {
  const [ProjectData, SetData] = useState([])
  const getdata = async () => {
    try {
      const response = await fetch(`/api/Lists/Project?id=${ID}`)
      const data = await response.json()
      SetData(data)
      console.log(data)
    } catch (err) {
      console.error('Unexpected error:', err)
    }
  }

  useEffect(() => {
    getdata()
  }, [])

  return (
    <div className="py-2 px-4 border-b-2 border-slate-200">
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
