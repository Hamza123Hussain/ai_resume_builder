import React from 'react'
import { useContext } from 'react'
import PerosnalDetailsPreview from './PersonalDetailsPreview'
import ProfileDetailsPreview from './ProfileDetailsPreview'
import WorkExperiencePreview from './WorkExperiencePreview'
import EducationPreview from './EducationPreview'
import ProjectDetailsPreview from './ProjectDetailsPreview'
import SkillsPreview from './SkillsPreview'
import { ThemeContext } from '../../lib/Context'
const FinalPreview = ({ ID }) => {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <div
      className={`flex flex-col p-2   ${theme.Text} ${theme.Border}    shadow-gray-600   border-2 `}
    >
      <PerosnalDetailsPreview ID={ID} />
      <ProfileDetailsPreview ID={ID} />
      <WorkExperiencePreview ID={ID} />
      <EducationPreview ID={ID} />
      <ProjectDetailsPreview ID={ID} />
      <SkillsPreview ID={ID} />
    </div>
  )
}

export default FinalPreview
