'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Trash2 } from 'lucide-react'
import Loader from '../Loader'
import toast from 'react-hot-toast'

const ProjectList = ({ ID }) => {
  const [ProjectData, setProjectData] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const getData = async () => {
    try {
      const response = await fetch(`/api/Lists/Project?id=${ID}`)
      const data = await response.json()
      setProjectData(data)
      setLoading(false)
    } catch (err) {
      console.error('Unexpected error:', err)
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const deleteData = async (itemId) => {
    try {
      const response = await fetch(`/api/Lists/Project?itemid=${itemId}`, {
        method: 'DELETE',
      })
      const data = await response.json()
      console.log('Data deleted successfully:', data)
      toast.success('Data has been deleted')
      getData()
    } catch (err) {
      console.error('Unexpected error:', err)
    }
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div className="flex flex-col gap-5 mt-5">
      {ProjectData.map((element, index) => (
        <div
          className="p-3 bg-slate-200 rounded-lg flex flex-col cursor-pointer"
          key={index}
        >
          <div className="flex justify-between items-center">
            <div
              className="flex flex-col"
              onClick={() => router.push(`/Project/${element.id}`)}
            >
              <h1 className="capitalize">{element.Name}</h1>
              <div className="px-2">
                <h3 className="text-sm text-gray-500">Description</h3>
                <p className="capitalize text-sm">
                  {element.Description.split(' ').slice(0, 20).join(' ')}{' '}
                  {element.Description.split(' ').length > 20 ? '...' : ''}
                </p>
              </div>
            </div>
            <Trash2 onClick={() => deleteData(element.id)} />
          </div>
        </div>
      ))}

      <button
        onClick={() => {
          router.push(`/CreateResumeData/${ID}/Project`)
        }}
        className="text-black rounded-lg p-3 border-2 border-slate-400"
      >
        Add More Projects
      </button>
    </div>
  )
}

export default ProjectList
