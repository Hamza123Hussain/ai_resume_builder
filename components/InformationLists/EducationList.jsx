'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Trash2 } from 'lucide-react'
import Loader from '../Loader'
import toast from 'react-hot-toast'
const EducationList = ({ ID }) => {
  const [EducationData, SetData] = useState([])
  const [loading, setloading] = useState(true)
  const getdata = async () => {
    try {
      const response = await fetch(`/api/Lists/Education?id=${ID}`)
      const data = await response.json()
      SetData(data)
      setloading(false)
      console.log(data)
    } catch (err) {
      console.error('Unexpected error:', err)
      setloading(false)
    }
  }

  useEffect(() => {
    getdata()
  }, [])
  const DeleteData = async (itemid) => {
    try {
      const response = await fetch(`/api/Lists/Education?itemid=${itemid}`, {
        method: 'DELETE',
      })
      const data = await response.json()
      console.log('Data deleted successfully:', data)
      toast.success('Data has been deleted')
      getdata()
    } catch (err) {
      console.error('Unexpected error:', err)
    }
  }

  const router = useRouter()

  if (loading) {
    return (
      <>
        <Loader />
      </>
    )
  }

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
