// app/education/EducationDetails.js
'use client'
import React, { useState } from 'react'
import { CreateData } from '../../../functions/CreatingEducationDetails'
import { useRouter } from 'next/navigation'
import EducationDetailsForm from './EducationDetailsForm'
import toast from 'react-hot-toast'
import { AIgenerate } from '../../../functions/AiGenerate'
import { MoveLeft } from 'lucide-react'
const EducationDetails = ({ ID }) => {
  const [EducationDetailss, setEducationDetailss] = useState({
    DegreeName: '',
    institueName: '',
    StartDate: '',
    EndDate: '',
    Country: '',
    City: '',
    Description: '',
  })
  const router = useRouter()
  const [loading, setloading] = useState(false)
  const ChangeInput = (e) => {
    setEducationDetailss((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const CallAi = async () => {
    setloading(true)
    const data = await AIgenerate(EducationDetailss.Description)
    setEducationDetailss((prev) => ({ ...prev, Description: data }))
    toast.success('Description Generated From AI')
    setloading(false)
  }

  const onSave = () => {
    CreateData(EducationDetailss, router, ID)
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
          <h1 className="font-bold text-lg">Education Details</h1>
        </div>
        <EducationDetailsForm
          EducationDetailss={EducationDetailss}
          ChangeInput={ChangeInput}
          onSave={onSave}
          CallAi={CallAi}
          loading={loading}
        />
      </div>
    </div>
  )
}

export default EducationDetails
