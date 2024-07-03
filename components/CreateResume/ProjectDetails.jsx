'use client'
import { supabase } from '../../lib/supabaseconfig'
import React, { useState } from 'react'

const ProjectDetails = ({ ID }) => {
  const [ProjectDetails, SetDetails] = useState({
    Name: '',
    Description: '',
  })
  const ChangeInput = (e) => {
    SetDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const CreateData = async () => {
    try {
      const { data, error } = await supabase.from('ProjectDetails').insert([
        {
          Name: ProjectDetails.Name,
          Description: ProjectDetails.Description,
          UserID: ID,
        },
      ])

      if (error) {
        console.error('Error inserting data:', error.message)
        alert('NO DATA SAVED')
      } else {
        console.log('Data inserted successfully:', data)
        alert('data in')
        Router.back()
      }
    } catch (err) {
      console.error('Unexpected error:', err)
      alert('data out')
    }
  }
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <h1 className="font-bold text-lg">Add Your Skills</h1>
      </div>
      <div>
        <div className="flex flex-col gap-5 mt-3">
          <div className="flex flex-col w-full">
            <label className="px-2">Project Name</label>
            <input
              name="Name"
              value={ProjectDetails.Name}
              onChange={ChangeInput}
              className="p-2 border-2 border-slate-300 rounded-lg"
              type="text"
              placeholder="Enter Project Name"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="px-2">Add A Project Description</label>
            <textarea
              name="Description"
              value={ProjectDetails.Description}
              onChange={ChangeInput}
              cols={10}
              rows={3}
              className=" border-2 border-slate-700 rounded-lg p-2"
              placeholder="Provide A Description About Your Project"
            />
          </div>
        </div>
        <div className=" flex justify-between mt-5">
          <button className=" text-black rounded-lg p-3 border-2 border-slate-400">
            ADD More Education Details
          </button>
          <button className=" text-black bg-red-600 px-5 py-2 rounded-lg">
            Remove
          </button>
        </div>
        <div onClick={() => CreateData()} className="flex justify-end mt-5">
          <button className="bg-green-600 text-white rounded-lg p-2">
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
