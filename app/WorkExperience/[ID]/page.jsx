import React from 'react'
import WorkExperience from '../../../components/ResumeDetails/WorkExperience'
const Page = ({ params }) => {
  return (
    <div>
      <WorkExperience ID={params.ID} />
    </div>
  )
}

export default Page
