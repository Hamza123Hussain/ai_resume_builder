import React from 'react'
import ProjectDetails from '../../../../components/CreateResume/ProjectDetails'

const Page = ({ params }) => {
  return (
    <div>
      <ProjectDetails ID={params.ID} />
    </div>
  )
}

export default Page
