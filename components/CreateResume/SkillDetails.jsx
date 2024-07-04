// components/SkillDetailsForm.js
'use client'
import React, { useState } from 'react'
import { CreateData } from '../../functions/CreateSkillDetails'
import { useRouter } from 'next/navigation'

const SkillDetails = ({ ID }) => {
  const [SkillDetails, setSkillDetails] = useState({
    Name: '',
    Skill_Level: '',
  })
  const router = useRouter()

  const ChangeInput = (e) => {
    setSkillDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const onsave = () => {
    CreateData(SkillDetails, router, ID)
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
              <option value="Amateur">Amateur</option>
              <option value="Competent">Competent</option>
              <option value="Proficient">Proficient</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end mt-5">
          <button
            onClick={onsave}
            className="bg-green-600 text-white rounded-lg p-2"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default SkillDetails
