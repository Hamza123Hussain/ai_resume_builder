'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CreateData } from '../../functions/CreateProject'
import { AIgenerate } from '../../functions/AiGenerate'
import Loader from '../Loader'
import toast from 'react-hot-toast'
import { MoveLeft } from 'lucide-react'

const ProjectDetailsForm = ({ ID }) => {
  const [ProjectDetails, setProjectDetails] = useState({
    Name: '',
    Description: '',
  })
  const [loading, setloading] = useState(false)
  const router = useRouter()

  const ChangeInput = (e) => {
    setProjectDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const CallAi = async () => {
    setloading(true)
    const data = await AIgenerate(ProjectDetails.Description)
    setProjectDetails((prev) => ({ ...prev, Description: data }))
    toast.success('DescriptionGeneratedFromAI')
    setloading(false)
  }

  const onSave = () => {
    CreateData(ProjectDetails, router, ID)
  }

  return (
    <div className=" p-4">
      <div
        onClick={() => router.back()}
        className=" px-2 mb-4 cursor-pointer flex items-center gap-2 border-2 rounded-lg w-fit hover:bg-black hover:text-white"
      >
        <MoveLeft size={50} />
        <h1 className=" text-lg font-bold">Go Back</h1>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h1 className="font-bold text-lg">Project Details</h1>
        </div>
        <div>
          <div className="flex flex-col gap-2 mt-3">
            <div className="flex flex-col w-full">
              <label className="px-2">Project Name</label>
              <input
                name="Name"
                value={ProjectDetails.Name}
                onChange={ChangeInput}
                className="p-2 border-2 border-slate-300 rounded-lg"
                type="text"
                placeholder="Enter the Name of Your Project"
                required
              />
            </div>
          </div>
          <div className="flex flex-col w-full mt-3">
            <label className="px-2">Description</label>
            {loading ? (
              <Loader />
            ) : (
              <textarea
                name="Description"
                value={ProjectDetails.Description}
                onChange={ChangeInput}
                className="p-2 border-2 border-slate-300 rounded-lg"
                placeholder="Enter Project Description"
                required
              />
            )}
          </div>

          <div className="flex justify-end mt-5 gap-5 p-2">
            <button
              onClick={CallAi}
              className={` text-sm sm:text-lg transition ${
                loading ? 'animate-pulse' : ''
              } bg-blue-500 text-white rounded-lg p-2`}
            >
              {loading
                ? 'GENERATING DESCRIPTION FROM AI'
                : 'CREATE A DESCRIPTION WITH AI'}
            </button>
            <button
              onClick={onSave}
              className="bg-green-600 text-white rounded-lg p-2"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailsForm
