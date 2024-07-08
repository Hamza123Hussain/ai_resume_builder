'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { FilePenLine, Trash2 } from 'lucide-react'
import Loader from '../Loader'
import toast from 'react-hot-toast'

const WorkExperienceList = ({ ID }) => {
  const [WorkData, SetData] = useState([])
  const [loading, setloading] = useState(true)
  const router = useRouter()
  const getdata = async () => {
    try {
      const response = await fetch(`/api/Lists/WorkExperience?id=${ID}`)
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
  if (loading) {
    return (
      <>
        <Loader />
      </>
    )
  }

  const DeleteData = async (itemid) => {
    try {
      const response = await fetch(
        `/api/Lists/WorkExperience?itemid=${itemid}`,
        {
          method: 'DELETE',
        }
      )
      const data = await response.json()
      toast.success('Data deleted successfully')
      getdata()
    } catch (err) {
      console.error('Unexpected error:', err)
    }
  }

  return (
    <div className="flex flex-col gap-5 mt-5">
      {WorkData.map((element, index) => (
        <div
          className="p-3 bg-slate-200 rounded-lg flex flex-col cursor-pointer"
          key={index}
        >
          <div className="flex justify-between">
            <div className="flex font-bold">
              <h1 className="capitalize">{element.Jobtitle}</h1>,
              <h1 className="capitalize">{element.Company}</h1>
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-between">
            <div className="flex gap-2">
              <h1 className="capitalize opacity-75">{element.StartDate}</h1>-
              <h1 className="capitalize opacity-75">{element.EndDate}</h1>
            </div>
            <div className="flex gap-2 opacity-85">
              <h1 className="capitalize">{element.City}</h1>,
              <h1 className="capitalize">{element.Country}</h1>
            </div>
          </div>
          <div className=" flex justify-end mt-2 gap-5">
            {' '}
            <FilePenLine
              className=" text-blue-500"
              onClick={() => router.push(`/WorkExperience/${element.id}`)}
            />
            <Trash2
              className=" text-red-600"
              onClick={() => DeleteData(element.id)}
            />
          </div>
        </div>
      ))}

      <button
        onClick={() => {
          router.push(`/CreateResumeData/${ID}/WorkExperience`)
        }}
        className="text-black rounded-lg p-3 border-2 border-slate-400 hover:text-white hover:bg-green-500"
      >
        ADD More Work Experience
      </button>
    </div>
  )
}

export default WorkExperienceList
