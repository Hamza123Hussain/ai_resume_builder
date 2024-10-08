'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { FilePenLine, Trash2 } from 'lucide-react'
import Loader from '../Loader'
import toast from 'react-hot-toast'

const SkillList = ({ ID }) => {
  const [SkillData, SetData] = useState([])
  const [loading, setloading] = useState(true)
  const router = useRouter()
  const getdata = async () => {
    try {
      const response = await fetch(`/api/Lists/Skill?id=${ID}`)
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
      const response = await fetch(`/api/Lists/Skill?itemid=${itemid}`, {
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
      {SkillData.map((element, index) => (
        <div
          className="px-2 py-1 bg-slate-200 rounded-lg flex flex-col cursor-pointer"
          key={index}
        >
          <div className="flex justify-between items-center">
            <div className="flex font-bold  flex-col">
              <h1 className="capitalize">{element.Name}</h1>
              <div className=" p-2 text-sm">
                <h3 className=" text-gray-500">Skill Level</h3>
                <h1 className="capitalize">{element.Skill_Level}</h1>
              </div>
            </div>
          </div>
          <div className=" flex justify-end mt-2 gap-5">
            {' '}
            <FilePenLine
              className=" text-blue-500"
              onClick={() => router.push(`/Skills/${element.id}`)}
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
          router.push(`/CreateResumeData/${ID}/Skills`)
        }}
        className="text-black rounded-lg p-3 border-2 hover:text-white border-slate-400 hover:bg-green-500"
      >
        ADD More Skills
      </button>
    </div>
  )
}

export default SkillList
