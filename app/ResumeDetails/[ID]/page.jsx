'use client'
import { Palette } from 'lucide-react'
import React, { useState } from 'react'
import PersonalDetails from '../../../components/ResumeDetails/PersonalDetails'
import SummaryDetails from '../../../components/ResumeDetails/SummaryDetails'
const ResumeDetails = ({ params }) => {
  const [index, setindex] = useState(1)

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2">
      <div className=" flex flex-col mt-5 p-2">
        <div className=" flex justify-between items-center">
          <div className=" flex gap-2">
            <Palette /> <h1>Change Theme</h1>
          </div>
          <div className=" py-1 flex gap-5">
            <button
              disabled={index <= 1}
              onClick={() => setindex((prev) => prev - 1)}
              className=" px-4 rounded-lg text-black border-2 border-slate-900 disabled:opacity-35"
            >
              Previous
            </button>
            <button
              onClick={() => setindex((prev) => prev + 1)}
              className=" py-1 px-4 rounded-lg bg-blue-300 text-white"
            >
              Next
            </button>
          </div>
        </div>
        {index == 1 ? <PersonalDetails ID={params.ID} /> : ''}
        {index == 2 ? <SummaryDetails ID={params.ID} /> : ''}
      </div>
    </div>
  )
}

export default ResumeDetails
