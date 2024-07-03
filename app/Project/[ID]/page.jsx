import React from 'react'
import ProjectDetails from '../../../components/ResumeDetails/ProjectDetails'
const Page = ({ params }) => {
  return (
    <div>
      <ProjectDetails ID={params.ID} />
    </div>
  )
}

export default Page
