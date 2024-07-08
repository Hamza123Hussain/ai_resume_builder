// app/education/EducationDetails.js
'use client'
import React, { useState } from 'react'
import { CreateData } from '../../../functions/CreatingEducationDetails'
import { useRouter } from 'next/navigation'
import EducationDetailsForm from './EducationDetailsForm'
import toast from 'react-hot-toast'
import { AIgenerate } from '../../../functions/AiGenerate'
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
  )
}

export default EducationDetails
