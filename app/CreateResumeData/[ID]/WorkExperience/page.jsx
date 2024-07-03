import React from 'react'
import CreateWorkExperience from '../../../../components/CreateResume/CreateWorkExperience'

const Page = ({ params }) => {
  return (
    <div>
      <CreateWorkExperience ID={params.ID} />
    </div>
  )
}

export default Page
