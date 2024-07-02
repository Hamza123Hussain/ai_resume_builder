'use client'
import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseconfig'
import Background from '../public/background.jpg'
import Image from 'next/image'
import Link from 'next/link'
const ResumeCard = () => {
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
        console.log(data)
        setloading(false)
      }
    } catch (err) {
      console.error('Unexpected error:', err)
    }
  }

  useEffect(() => {
    getdata()
  }, [])

  return (
    <div>
      {loading ? (
        <div className=" flex gap-2 justify-center items-center relative top-10">
          <div class="loader"></div>
        </div>
      ) : (
        <div className=" grid grid-cols-2 sm:grid-cols-3">
          {Userdata.map((element) => {
            return (
              <div key={element.ID}>
                <Link href={'/'}>
                  {' '}
                  <Image alt="" src={Background} width={140} height={140} />
                </Link>

                <h3 className=" capitalize block mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  {element.UserTitle}
                </h3>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ResumeCard
