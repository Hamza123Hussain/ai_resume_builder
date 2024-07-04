'use client'
import { Palette } from 'lucide-react'
import React, { useState } from 'react'
import PersonalDetails from '../../../components/ResumeDetails/PersonalDetails'
import SummaryDetails from '../../../components/ResumeDetails/SummaryDetails'
import WorkExperienceList from '../../../components/InformationLists/WorkExperienceList'
import EducationList from '../../../components/InformationLists/EducationList'
import SkillList from '../../../components/InformationLists/SkillList'
import ProjectList from '../../../components/InformationLists/ProjectList'
import PerosnalDetailsPreview from '../../../components/ResumePreview/PersonalDetailsPreview'
import ProfileDetailsPreview from '../../../components/ResumePreview/ProfileDetailsPreview'
import WorkExperiencePreview from '../../../components/ResumePreview/WorkExperiencePreview'
import EducationPreview from '../../../components/ResumePreview/EducationPreview'
import ProjectDetailsPreview from '../../../components/ResumePreview/ProjectDetailsPreview'
import SkillsPreview from '../../../components/ResumePreview/SkillsPreview'
const ResumeDetails = ({ params }) => {
  const [index, setindex] = useState(1)

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 sm:gap-10 ">
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
              disabled={index >= 6}
              onClick={() => setindex((prev) => prev + 1)}
              className=" py-1 px-4 rounded-lg bg-blue-600 text-white disabled:opacity-20"
            >
              Next
            </button>
          </div>
        </div>
        {index == 1 ? <PersonalDetails ID={params.ID} /> : ''}
        {index == 2 ? <SummaryDetails ID={params.ID} /> : ''}
        {index == 3 ? <WorkExperienceList ID={params.ID} /> : ''}
        {index == 4 ? <EducationList ID={params.ID} /> : ''}
        {index == 5 ? <SkillList ID={params.ID} /> : ''}
        {index == 6 ? <ProjectList ID={params.ID} /> : ''}
      </div>

      <div className=" flex flex-col p-2 bg-green-950 text-white mt-5 min-h-max mr-2  shadow-gray-600 shadow-md rounded-md border-2 border-red-600">
        <PerosnalDetailsPreview ID={params.ID} />
        <ProfileDetailsPreview ID={params.ID} />
        <WorkExperiencePreview ID={params.ID} />
        <EducationPreview ID={params.ID} />
        <ProjectDetailsPreview ID={params.ID} />
        <SkillsPreview ID={params.ID} />
      </div>
    </div>
  )
}

export default ResumeDetails
