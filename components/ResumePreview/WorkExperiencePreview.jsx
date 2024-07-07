'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { supabase } from '../../lib/supabaseconfig'

const WorkExperiencePreview = ({ ID, theme }) => {
  const [WorkData, SetData] = useState([])
  const getdata = async () => {
    try {
      const response = await fetch(`/api/Lists/WorkExperience?id=${ID}`)
      const data = await response.json()
      SetData(data)
      // console.log(data)
    } catch (err) {
      console.error('Unexpected error:', err)
    }
  }

  useEffect(() => {
    getdata()
  }, [WorkData])

  return WorkData.length > 0 ? (
    <div className={`py-2 px-4 border-b-2 ${theme.Border}`}>
      <h1 className=" text-xl font-bold">Work Experience</h1>

      {WorkData.map((element, index) => {
        return (
          <div
            className="py-3  bg-transparent rounded-lg flex flex-col cursor-pointer gap-2 p-2 "
            key={index}
          >
            <div className=" text-xs flex justify-between items-center w-full">
              <div className=" flex font-extrabold items-center  ">
                <h1 className=" capitalize">{element.Jobtitle}</h1>,
                <h1 className=" capitalize">{element.Company}</h1>
              </div>
              <div className="flex gap-2 opacity-85 items-center">
                <h1 className=" capitalize">{element.State}</h1>,
                <h1 className=" capitalize">{element.Country}</h1>
              </div>{' '}
            </div>
            <div className=" flex gap-1 text-xs">
              {' '}
              <h1 className=" capitalize opacity-75">{element.StartDate}</h1>-
              <h1 className=" capitalize opacity-75">{element.EndDate}</h1>
            </div>

            <div className="text-sm  break-words whitespace-normal ">
              {element.Description}
            </div>
          </div>
        )
      })}
    </div>
  ) : (
    ''
  )
}

export default WorkExperiencePreview
