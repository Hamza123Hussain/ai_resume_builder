'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { supabase } from '../../lib/supabaseconfig'
import { useRouter } from 'next/navigation'
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
  const router = useRouter()

  return (
    <div className=" flex flex-col gap-5 mt-5">
      {WorkData.map((element, index) => {
        return (
          <div
            className="p-3 bg-slate-200 rounded-lg flex flex-col cursor-pointer "
            key={index}
            onClick={() => router.push(`/WorkExperience/${element.id}`)}
          >
            <div className=" flex font-bold ">
              <h1 className=" capitalize">{element.Jobtitle}</h1>,
              <h1 className=" capitalize">{element.Company}</h1>
            </div>
            <div className=" flex justify-between">
              <div className=" flex gap-2">
                {' '}
                <h1 className=" capitalize opacity-75">
                  {element.StartDate}
                </h1>-{' '}
                <h1 className=" capitalize opacity-75">{element.EndDate}</h1>
              </div>
              <div className="flex gap-2 opacity-85">
                {' '}
                <h1 className=" capitalize">{element.State}</h1>,
                <h1 className=" capitalize">{element.Country}</h1>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default WorkExperienceList
