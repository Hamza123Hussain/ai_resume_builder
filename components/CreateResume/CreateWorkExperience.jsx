'use client'
import React, { useState } from 'react'
import { AIgenerate } from '../../functions/AiGenerate'
import { useRouter } from 'next/navigation'
import { CreateWork } from '../../functions/CreateWorkExperience'
import toast from 'react-hot-toast'
import Loader from '../Loader'
import { MoveLeft } from 'lucide-react'

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
  const [loading, setloading] = useState(false)
  const ChangeInput = (e) => {
    setWorkDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const CallAi = async () => {
    setloading(true)
    const data = await AIgenerate(WorkDetails.Description)
    setWorkDetails((prev) => ({ ...prev, Description: data }))
    toast.success('Description Generated From AI')
    setloading(false)
  }

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
          <h1 className="font-bold text-lg">Work Experience</h1>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row gap-2 mt-3">
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
            <div className="flex flex-col w-full">
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
            {loading ? (
              <Loader />
            ) : (
              <textarea
                name="Description"
                value={WorkDetails.Description}
                onChange={ChangeInput}
                className="p-2 border-2 border-slate-300 rounded-lg"
                placeholder="Enter Job Description"
                required
              />
            )}
          </div>

          <div className="flex justify-end mt-5 gap-5 p-2">
            <button
              onClick={CallAi}
              className={` transition text-sm sm:text-lg ${
                loading ? 'animate-pulse' : ''
              } bg-blue-500 text-white rounded-lg p-2`}
            >
              {loading
                ? 'GENERATING DESCRIPTION FROM AI'
                : 'CREATE A DESCRIPTION WITH AI'}
            </button>
            <button
              onClick={() => CreateWork(WorkDetails, Router, ID)}
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

export default CreateWorkExperience
