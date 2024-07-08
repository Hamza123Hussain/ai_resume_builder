// functions/CreateSkillDetails.js
import axios from 'axios'
import toast from 'react-hot-toast'

export const CreateData = async (SkillDetails, router, ID) => {
  try {
    const response = await axios.post('/api/CreateResume/createSkillDetails', {
      Name: SkillDetails.Name,
      Skill_Level: SkillDetails.Skill_Level,
      UserID: ID,
    })

    if (response.status === 201) {
      console.log('Data inserted successfully:', response.data)
      toast.success('Skill DETAILS SAVED')
      router.back()
    } else {
      console.error('Error inserting data:', response.data.message)
      alert('NO DATA SAVED')
    }
  } catch (err) {
    console.error('Unexpected error:', err)
    alert('Unexpected error occurred')
  }
}
