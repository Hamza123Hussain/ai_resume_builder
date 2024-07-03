import React from 'react'
import SkillDetails from '../../../components/ResumeDetails/SkillDetails'
const Page = ({ params }) => {
  return (
    <div>
      <SkillDetails ID={params.ID} />
    </div>
  )
}

export default Page
