import React from 'react'
import EducationDetails from '../../../../components/CreateResume/EducationDetails/CreateEducationDetails'

const Page = ({ params }) => {
  return (
    <div>
      <EducationDetails ID={params.ID} />
    </div>
  )
}

export default Page
