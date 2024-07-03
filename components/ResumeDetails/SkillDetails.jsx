'use client'
import React, { useState } from 'react'

const SkillDetails = () => {
  const [SkillDetails, SetDetails] = useState({ Name: '', Skill_Level: '' })
  const ChangeInput = (e) => {
    SetDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <h1 className="font-bold text-lg">Add Your Skills</h1>
      </div>
      <div>
        <div className="flex flex-col sm:flex-row gap-2 mt-3">
          <div className="flex flex-col w-full">
            <label className="px-2">Skill Name</label>
            <input
              name="Name"
              value={SkillDetails.Name}
              onChange={ChangeInput}
              className="p-2 border-2 border-slate-300 rounded-lg"
              type="text"
              placeholder="Enter Skill"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="px-2">Skill Level</label>
            <select
              name="Skill_Level"
              value={SkillDetails.Skill_Level}
              onChange={ChangeInput}
              className="p-2 border-2 border-slate-300 rounded-lg"
              required
            >
              <option value="" disabled>
                Select Skill Level
              </option>
              <option value="Beginner">Beginner</option>
              <option value="Amateur">Amateur</option>{' '}
              <option value="Compotent">Compotent</option>{' '}
              <option value="Proficent">Proficent</option>
              <option value="Expert">Expert</option>
            </select>
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

export default SkillDetails
