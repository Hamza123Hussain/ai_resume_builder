import React from 'react'
import SkillDetails from '../../../../components/CreateResume/SkillDetails'

const page = ({ params }) => {
  return (
    <div>
      <SkillDetails ID={params.ID} />
    </div>
  )
}

export default page
