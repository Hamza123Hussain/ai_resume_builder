'use client'
import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseconfig'
import Background from '../public/background.jpg'
import Image from 'next/image'

import { useRouter } from 'next/navigation'
const ResumeCard = () => {
  const Router = useRouter()
  const [Userdata, SetData] = useState([])
  const [loading, setloading] = useState(true)
  const getdata = async () => {
    try {
      const { data, error } = await supabase.from('UserData').select('*')

      if (error) {
        console.error('Error inserting data:', error.message)
        alert('NO DATA SAVED')
      } else {
        SetData(data)
        // console.log(data)
        setloading(false)
      }
    } catch (err) {
      console.error('Unexpected error:', err)
    }
  }

  useEffect(() => {
    getdata()
  }, [Userdata])
  const DeleteData = async (itemid) => {
    try {
      const { data, error } = await supabase
        .from('UserData')
        .delete()
        .eq('ID', itemid)

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
    <div>
      {loading ? (
        <div className=" flex gap-2 justify-center items-center relative top-10">
          <div class="loader"></div>
        </div>
      ) : (
        <div className=" grid grid-cols-2 lg:grid-cols-5 gap-4 items-center justify-center ">
          {Userdata.map((element) => {
            return (
              <div
                className=" flex flex-col items-center justify-center"
                key={element.ID}
              >
                <div
                  className=" cursor-pointer flex flex-col items-center  "
                  onClick={() => Router.push(`/ResumeDetails/${element.ID}`)}
                >
                  <Image alt="" src={Background} width={140} height={140} />
                  <h3 className=" capitalize block mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                    {element.UserTitle}
                  </h3>
                </div>
                <div className=" flex gap-2 items-center sm:flex-row flex-col">
                  <button
                    onClick={() => Router.push(`/ResumePreview/${element.ID}`)}
                    className=" py-2 px-5 bg-blue-800 rounded-lg text-white cursor-pointer"
                  >
                    View
                  </button>
                  <button
                    onClick={() => DeleteData(element.ID)}
                    className=" py-2 px-5 bg-red-500 rounded-lg text-white cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ResumeCard
