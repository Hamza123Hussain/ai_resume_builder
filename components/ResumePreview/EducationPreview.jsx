'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { supabase } from '../../lib/supabaseconfig'

const EducationPreview = ({ ID, theme }) => {
  const [EducationData, SetData] = useState([])
  const getdata = async () => {
    try {
      const response = await fetch(`/api/Lists/Education?id=${ID}`)
      const data = await response.json()
      SetData(data)
      // console.log(data)
    } catch (err) {
      console.error('Unexpected error:', err)
    }
  }

  useEffect(() => {
    getdata()
  }, [EducationData])

  return EducationData.length > 0 ? (
    <div className={`py-2 px-4 border-b-2 ${theme.Border}`}>
      <h1 className=" font-extrabold text-xl">Education Details</h1>
      {EducationData.map((element, index) => {
        return (
          <div
            className="py-3  rounded-lg flex flex-col cursor-pointer gap-1  p-2 "
            key={index}
          >
            <div className=" text-xs flex justify-between ">
              <div className=" flex font-bold ">
                <h1 className=" capitalize">{element.DegreeName}</h1>,
                <h1 className=" capitalize">{element.institueName}</h1>
              </div>
              <div className="flex gap-2 opacity-85">
                <h1 className=" capitalize">{element.City}</h1>,
                <h1 className=" capitalize">{element.Country}</h1>
              </div>
            </div>

            <div className=" flex gap-2 text-xs">
              <h1 className=" capitalize opacity-75">{element.StartDate}</h1>-
              <h1 className=" capitalize opacity-75">{element.EndDate}</h1>
            </div>
            <div className="text-sm  break-words whitespace-normal">
              {element.Description}
            </div>
          </div>
        )
      })}
    </div>
  ) : (
    <></>
  )
}

export default EducationPreview
