'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseconfig'
import toast from 'react-hot-toast'
import { MoveLeft } from 'lucide-react'

const SkillDetails = ({ ID }) => {
  const [SkillDetails, SetDetails] = useState({ Name: '', Skill_Level: '' })
  const Router = useRouter()

  const ChangeInput = (e) => {
    SetDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const UpdateData = async () => {
    try {
      const { data, error } = await supabase
        .from('SkillDetails')
        .update([
          {
            Name: SkillDetails.Name,
            Skill_Level: SkillDetails.Skill_Level,
          },
        ])
        .eq('id', ID)

      if (error) {
        // console.error('Error inserting data:', error.message)
        // alert('NO DATA SAVED')
        toast.error('FILL ALL THE FIELDS')
      } else {
        console.log('Data inserted successfully:', data)
        toast.success('Data has been Updated')
        Router.back()
      }
    } catch (err) {
      // console.error('Unexpected error:', err)
      // alert('Unexpected error occurred')
    }
  }
  const getdata = async () => {
    try {
      const { data, error } = await supabase
        .from('SkillDetails')
        .select('*')
        .eq('id', ID) // Filter by the id

      if (error) {
        // console.error('Error fetching data:', error.message)
        // alert('NO DATA SAVED')
      } else {
        console.log(data)
        if (data.length > 0) {
          SetDetails(data[0]) // Assuming data is an array and you want the first item
        }
      }
    } catch (err) {
      console.error('Unexpected error:', err)
    }
  }

  useEffect(() => {
    getdata()
  }, [ID])

  return (
    <div className=" p-4">
      <div
        onClick={() => Router.back()}
        className=" px-2 mb-4 cursor-pointer flex items-center gap-2 border-2 rounded-lg w-fit hover:bg-black hover:text-white"
      >
        <MoveLeft size={50} />
        <h1 className=" text-lg font-bold">Go Back</h1>
      </div>
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
              onClick={UpdateData}
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

export default SkillDetails
