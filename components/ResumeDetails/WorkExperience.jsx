'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'

import { supabase } from '../../lib/supabaseconfig'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

const WorkExperience = ({ ID }) => {
  const [WorkDetails, setWorkDetails] = useState({
    Jobtitle: '',
    Company: '',
    StartDate: '',
    EndDate: '',
    Country: '',
    State: '',
    Description: '',
  })
  const Router = useRouter()

  const ChangeInput = (e) => {
    setWorkDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const CreateData = async () => {
    try {
      const { data, error } = await supabase
        .from('WorkExperience')
        .update({
          Jobtitle: WorkDetails.Jobtitle,
          Company: WorkDetails.Company,
          StartDate: WorkDetails.StartDate,
          EndDate: WorkDetails.EndDate,
          Country: WorkDetails.Country,
          State: WorkDetails.State,
          Description: WorkDetails.Description,
        })
        .eq('id', ID) // Add the condition to specify which row to update

      if (error) {
        // console.error('Error updating data:', error.message)
        // alert('NO DATA SAVED')
      } else {
        console.log('Data updated successfully:', data)
        alert('Data updated successfully')
        Router.back()
      }
    } catch (err) {
      console.error('Unexpected error:', err)
      alert('Unexpected error occurred')
    }
  }

  const getdata = async () => {
    try {
      const { data, error } = await supabase
        .from('WorkExperience')
        .select('*')
        .eq('id', ID) // Filter by the id

      if (error) {
        // console.error('Error fetching data:', error.message)
        // alert('NO DATA SAVED')
      } else {
        console.log(data)
        if (data.length > 0) {
          setWorkDetails(data[0]) // Assuming data is an array and you want the first item
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
    <div className="flex flex-col">
      <div className="flex flex-col">
        <h1 className="font-bold text-lg">Work Experience</h1>
      </div>
      <div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex flex-col w-full">
            <label className="px-2">Job Title</label>
            <input
              name="Jobtitle"
              value={WorkDetails.Jobtitle}
              onChange={ChangeInput}
              className="p-2 border-2 border-slate-300 rounded-lg"
              type="text"
              placeholder="Enter Your Job Title"
              required
            />
          </div>
          <div className="flex flex-col w-full mt-3">
            <label className="px-2">Company</label>
            <input
              name="Company"
              value={WorkDetails.Company}
              onChange={ChangeInput}
              className="p-2 border-2 border-slate-300 rounded-lg"
              type="text"
              placeholder="Enter Company Name"
              required
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 mt-3">
          <div className="flex flex-col w-full">
            <label className="px-2">Start Date</label>
            <input
              name="StartDate"
              value={WorkDetails.StartDate}
              onChange={ChangeInput}
              className="p-2 border-2 border-slate-300 rounded-lg"
              type="date"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="px-2">End Date</label>
            <input
              name="EndDate"
              value={WorkDetails.EndDate}
              onChange={ChangeInput}
              className="p-2 border-2 border-slate-300 rounded-lg"
              type="date"
              required
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 mt-3">
          <div className="flex flex-col w-full">
            <label className="px-2">Country</label>
            <input
              name="Country"
              value={WorkDetails.Country}
              onChange={ChangeInput}
              className="p-2 border-2 border-slate-300 rounded-lg"
              type="text"
              placeholder="Enter Country"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="px-2">State</label>
            <input
              name="State"
              value={WorkDetails.State}
              onChange={ChangeInput}
              className="p-2 border-2 border-slate-300 rounded-lg"
              type="text"
              placeholder="Enter State"
              required
            />
          </div>
        </div>
        <div className="flex flex-col w-full mt-3">
          <label className="px-2">Description</label>
          <textarea
            name="Description"
            value={WorkDetails.Description}
            onChange={ChangeInput}
            className="p-2 border-2 border-slate-300 rounded-lg"
            placeholder="Enter Job Description"
            required
          />
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

export default WorkExperience
