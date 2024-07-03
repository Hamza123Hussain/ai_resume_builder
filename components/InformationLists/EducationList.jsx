'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { supabase } from '../../lib/supabaseconfig'
import { useRouter } from 'next/navigation'
import { Trash2 } from 'lucide-react'
const EducationList = ({ ID }) => {
  const [EducationData, SetData] = useState([])
  const getdata = async () => {
    try {
      const { data, error } = await supabase
        .from('EducationDetails')
        .select('*')

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
        .from('EducationDetails')
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
  //   Country
  //   :
  //   "Pakistan"
  //   DegreeName
  //   :
  //   "CS"
  //   Description
  //   :
  //   "GVTGV"
  //   EndDate
  //   :
  //   "2024-07-11"
  //   StartDate
  //   :
  //   "2024-02-03"
  //   State
  //   :
  //   "punjab"
  //   UserID
  //   :
  //   "0cb7e189-7179-4f01-b97a-14f4de507b6f"

  //   id
  //   :
  //   2
  //   institueName
  //   :
  ;('UOL')
  return (
    <div className=" flex flex-col gap-5 mt-5">
      {EducationData.map((element, index) => {
        return (
          <div
            className="p-3 bg-slate-200 rounded-lg flex flex-col cursor-pointer "
            key={index}
          >
            <div className=" flex justify-between">
              <div
                className=" flex font-bold "
                onClick={() => router.push(`/Education/${element.id}`)}
              >
                <h1 className=" capitalize">{element.DegreeName}</h1>,
                <h1 className=" capitalize">{element.institueName}</h1>
              </div>
              <Trash2 onClick={() => DeleteData(element.id)} />
            </div>
            <div className=" flex sm:flex-row flex-col justify-between">
              <div
                className=" flex gap-2"
                onClick={() => router.push(`/Education/${element.id}`)}
              >
                <h1 className=" capitalize opacity-75">{element.StartDate}</h1>-
                <h1 className=" capitalize opacity-75">{element.EndDate}</h1>
              </div>
              <div
                className="flex gap-2 opacity-85"
                onClick={() => router.push(`/Education/${element.id}`)}
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
          router.push(`/CreateResumeData/${ID}/Education`)
        }}
        className=" text-black rounded-lg p-3 border-2 border-slate-400"
      >
        ADD More Education Details
      </button>
    </div>
  )
}

export default EducationList
