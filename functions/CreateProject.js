// functions/CreateProjectDetails.js
import axios from 'axios'
import toast from 'react-hot-toast'

export const CreateData = async (ProjectDetails, router, ID) => {
  try {
    const response = await axios.post(
      '/api/CreateResume/CreateProjectDetails',
      {
        Name: ProjectDetails.Name,
        Description: ProjectDetails.Description,
        UserID: ID,
      }
    )

    if (response.status === 201) {
      console.log('Data inserted successfully:', response.data)
      toast.success('Project DETAILS SAVED')
      router.back()
    } else {
      console.error('Error inserting data:', response.data.message)
      toast.error('FILL ALL THE FIELDS')
    }
  } catch (err) {
    console.error('Unexpected error:', err)
    alert('Unexpected error occurred')
  }
}
