'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FilePenLine, Trash2 } from 'lucide-react'
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
              <div className=" flex font-bold ">
                <h1 className=" capitalize">{element.DegreeName}</h1>,
                <h1 className=" capitalize">{element.institueName}</h1>
              </div>
            </div>
            <div className=" flex sm:flex-row flex-col justify-between">
              <div className=" flex gap-2">
                <h1 className=" capitalize opacity-75">{element.StartDate}</h1>-
                <h1 className=" capitalize opacity-75">{element.EndDate}</h1>
              </div>
              <div className="flex gap-2 opacity-85">
                <h1 className=" capitalize">{element.City}</h1>,
                <h1 className=" capitalize">{element.Country}</h1>
              </div>
            </div>
            <div className=" flex justify-end mt-2 gap-5">
              {' '}
              <FilePenLine
                className=" text-blue-500"
                onClick={() => router.push(`/Education/${element.id}`)}
              />
              <Trash2
                className=" text-red-600"
                onClick={() => DeleteData(element.id)}
              />
            </div>
          </div>
        )
      })}

      <button
        onClick={() => {
          router.push(`/CreateResumeData/${ID}/Education`)
        }}
        className=" text-black rounded-lg p-3 border-2 hover:text-white border-slate-400 hover:bg-green-500"
      >
        ADD More Education Details
      </button>
    </div>
  )
}

export default EducationList
