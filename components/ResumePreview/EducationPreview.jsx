'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { supabase } from '../../lib/supabaseconfig'

const EducationPreview = ({ ID }) => {
  const [EducationData, SetData] = useState([])
  const getdata = async () => {
    try {
      const { data, error } = await supabase
        .from('EducationDetails')
        .select('*')
        .eq('UserID', ID)

      if (error) {
        // console.error('Error inserting data:', error.message)
        // alert('NO DATA SAVED')
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
  }, [EducationData])

  return (
    <div className="py-2 px-4">
      <h1 className=" font-extrabold text-xl">Education Details</h1>
      {EducationData.map((element, index) => {
        return (
          <div
            className="py-3  rounded-lg flex flex-col cursor-pointer gap-1 "
            key={index}
          >
            <div className=" text-xs flex justify-between">
              <div className=" flex font-bold ">
                <h1 className=" capitalize">{element.DegreeName}</h1>,
                <h1 className=" capitalize">{element.institueName}</h1>
              </div>
              <div className="flex gap-2 opacity-85">
                <h1 className=" capitalize">{element.State}</h1>,
                <h1 className=" capitalize">{element.Country}</h1>
              </div>
            </div>

            <div className=" flex gap-2 text-xs">
              <h1 className=" capitalize opacity-75">{element.StartDate}</h1>-
              <h1 className=" capitalize opacity-75">{element.EndDate}</h1>
            </div>
            <div className="text-xs break-words whitespace-normal mt-2">
              {element.Description}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default EducationPreview
