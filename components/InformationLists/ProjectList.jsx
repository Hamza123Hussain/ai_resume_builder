'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Trash2 } from 'lucide-react'
import Loader from '../Loader'
import toast from 'react-hot-toast'
const ProjectList = ({ ID }) => {
  const [ProjectData, SetData] = useState([])
  const [loading, setloading] = useState(true)
  const router = useRouter()
  const getdata = async () => {
    try {
      const response = await fetch(`/api/Lists/Project?id=${ID}`)
      const data = await response.json()
      SetData(data)
      console.log(data)
      setloading(false)
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
      const response = await fetch(`/api/Lists/Project?itemid=${itemid}`, {
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

  return (
    <div className="flex flex-col gap-5 mt-5">
      {ProjectData.map((element, index) => (
        <div
          className="p-3 bg-slate-200 rounded-lg flex flex-col cursor-pointer"
          key={index}
        >
          <div className="flex justify-between">
            <div
              className="flex font-bold gap-2"
              onClick={() => router.push(`/Project/${element.id}`)}
            >
              <h1 className="capitalize">{element.Name}</h1> --
              <h1 className="capitalize">{element.Description}</h1>
            </div>
            <Trash2 onClick={() => DeleteData(element.id)} />
          </div>
        </div>
      ))}

      <button
        onClick={() => {
          router.push(`/CreateResumeData/${ID}/Project`)
        }}
        className="text-black rounded-lg p-3 border-2 border-slate-400"
      >
        ADD More Projects
      </button>
    </div>
  )
}

export default ProjectList
