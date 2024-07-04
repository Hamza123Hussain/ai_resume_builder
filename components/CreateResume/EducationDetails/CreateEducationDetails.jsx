// app/education/EducationDetails.js
'use client'
import React, { useState } from 'react'
import { CreateData } from '../../../functions/CreatingEducationDetails'
import { useRouter } from 'next/navigation'
import EducationDetailsForm from './EducationDetailsForm'

const EducationDetails = ({ ID }) => {
  const [EducationDetailss, setEducationDetailss] = useState({
    DegreeName: '',
    institueName: '',
    StartDate: '',
    EndDate: '',
    Country: '',
    State: '',
    Description: '',
  })
  const router = useRouter()
  const ChangeInput = (e) => {
    setEducationDetailss((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
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
      />
    </div>
  )
}

export default EducationDetails
