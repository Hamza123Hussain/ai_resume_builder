import axios from 'axios'
import toast from 'react-hot-toast'
export const CreateData = async (EducationDetailss, router, ID) => {
  try {
    const response = await axios.post(
      '/api/CreateResume/createEducationDetail',
      {
        DegreeName: EducationDetailss.DegreeName,
        institueName: EducationDetailss.institueName,
        StartDate: EducationDetailss.StartDate,
        EndDate: EducationDetailss.EndDate,
        Country: EducationDetailss.Country,
        City: EducationDetailss.City,
        Description: EducationDetailss.Description,
        UserID: ID,
      }
    )

    if (response.status === 201) {
      console.log('Data inserted successfully:', response.data)
      toast.success('Education Details Saved')
      router.push(`/ResumeDetails/${ID}`)
    } else {
      console.error('Error inserting data:', response.data.message)
      toast.error('FILL ALL THE FIELDS')
    }
  } catch (err) {
    console.error('Unexpected error:', err)
    alert('data out')
  }
}
