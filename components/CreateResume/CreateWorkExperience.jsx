'use client'
import React, { useState } from 'react'
import { useCity } from 'react'

import { useRouter } from 'next/navigation'
import { CreateWork } from '../../functions/CreateWorkExperience'

const CreateWorkExperience = ({ ID }) => {
  const [WorkDetails, setWorkDetails] = useState({
    Jobtitle: '',
    Company: '',
    StartDate: '',
    EndDate: '',
    Country: '',
    City: '',
    Description: '',
  })
  const Router = useRouter()

  const ChangeInput = (e) => {
    setWorkDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

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
            <label className="px-2">City</label>
            <input
              name="City"
              value={WorkDetails.City}
              onChange={ChangeInput}
              className="p-2 border-2 border-slate-300 rounded-lg"
              type="text"
              placeholder="Enter City"
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

        <div className="flex justify-end mt-5">
          <button
            onClick={() => CreateWork(WorkDetails, Router, ID)}
            className="bg-green-600 text-white rounded-lg p-2"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateWorkExperience
