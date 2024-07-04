'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CreateData } from '../../functions/CreateProject'

const ProjectDetailsForm = ({ ID }) => {
  const [ProjectDetails, setProjectDetails] = useState({
    Name: '',
    Description: '',
  })
  const router = useRouter()

  const ChangeInput = (e) => {
    setProjectDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const onSave = () => {
    CreateData(ProjectDetails, router, ID)
  }

  return (
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
          <textarea
            name="Description"
            value={ProjectDetails.Description}
            onChange={ChangeInput}
            className="p-2 border-2 border-slate-300 rounded-lg"
            placeholder="Enter Project Description"
            required
          />
        </div>
        <div onClick={onSave} className="flex justify-end mt-5">
          <button className="bg-green-600 text-white rounded-lg p-2">
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailsForm
