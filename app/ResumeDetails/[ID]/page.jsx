'use client'

import React, { useState } from 'react'
import PersonalDetails from '../../../components/ResumeDetails/PersonalDetails'
import SummaryDetails from '../../../components/ResumeDetails/SummaryDetails'
import WorkExperienceList from '../../../components/InformationLists/WorkExperienceList'
import EducationList from '../../../components/InformationLists/EducationList'
import SkillList from '../../../components/InformationLists/SkillList'
import ProjectList from '../../../components/InformationLists/ProjectList'
import Theme from '../../../components/Theme'
import FinalPreview from '../../../components/ResumePreview/FinalPreview'
import { useRouter } from 'next/navigation'
const ResumeDetails = ({ params }) => {
  const [index, setindex] = useState(1)
  const Router = useRouter()
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 sm:gap-10 ">
      <div className=" flex flex-col mt-5 p-2">
        {' '}
        <div className=" flex gap-2">
          <Theme />
        </div>
        {index == 1 ? <PersonalDetails ID={params.ID} /> : ''}
        {index == 2 ? <SummaryDetails ID={params.ID} /> : ''}
        {index == 3 ? <WorkExperienceList ID={params.ID} /> : ''}
        {index == 4 ? <EducationList ID={params.ID} /> : ''}
        {index == 5 ? <SkillList ID={params.ID} /> : ''}
        {index == 6 ? <ProjectList ID={params.ID} /> : ''}{' '}
        <div className=" mt-5 flex  justify-between">
          <button
            disabled={index <= 1}
            onClick={() => setindex((prev) => prev - 1)}
            className=" px-4 rounded-lg text-black border-2 border-slate-900 disabled:opacity-35"
          >
            Previous
          </button>
          <button
            disabled={index >= 6}
            onClick={() => setindex((prev) => prev + 1)}
            className=" py-1 px-4 rounded-lg bg-blue-600 text-white disabled:opacity-20"
          >
            Next
          </button>
        </div>
        <button
          onClick={() => Router.push(`/ResumePreview/${params.ID}`)}
          className=" w-full rounded-lg bg-green-400 p-3 text-white mt-5"
        >
          GO TO DOWNLOAD PAGE
        </button>{' '}
      </div>

      <FinalPreview ID={params.ID} />
    </div>
  )
}

export default ResumeDetails
