import React from 'react'
import EducationDetails from '../../../components/ResumeDetails/EducationDetails'
const Page = ({ params }) => {
  return (
    <div>
      <EducationDetails ID={params.ID} />
    </div>
  )
}

export default Page
