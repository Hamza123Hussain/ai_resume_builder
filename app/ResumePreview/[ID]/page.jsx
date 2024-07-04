'use client'
import React from 'react'
import PerosnalDetailsPreview from '../../../components/ResumePreview/PersonalDetailsPreview'
import ProfileDetailsPreview from '../../../components/ResumePreview/ProfileDetailsPreview'
import WorkExperiencePreview from '../../../components/ResumePreview/WorkExperiencePreview'
import ProjectDetailsPreview from '../../../components/ResumePreview/ProjectDetailsPreview'
import SkillsPreview from '../../../components/ResumePreview/SkillsPreview'
import EducationPreview from '../../../components/ResumePreview/EducationPreview'
const page = ({ params }) => {
  return (
    <>
      <div id="kill" className="flex flex-col items-center justify-center mb-4">
        <h1>Your Resume is Ready To Be Downloaded</h1>
        <button
          className=" bg-green-400 text-white px-7 py-2"
          onClick={() => window.print()}
        >
          Download
        </button>
      </div>
      <div
        id="printme"
        className=" flex flex-col p-2 bg-green-950 text-white     shadow-gray-600   border-2 border-red-600"
      >
        <PerosnalDetailsPreview ID={params.ID} />
        <ProfileDetailsPreview ID={params.ID} />
        <WorkExperiencePreview ID={params.ID} />
        <EducationPreview ID={params.ID} />
        <ProjectDetailsPreview ID={params.ID} />
        <SkillsPreview ID={params.ID} />
      </div>
    </>
  )
}

export default page
