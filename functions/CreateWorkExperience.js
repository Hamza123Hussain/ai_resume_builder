import axios from 'axios'
import toast from 'react-hot-toast'

export const CreateWork = async (WorkDetails, router, ID) => {
  try {
    const response = await axios.post('/api/CreateResume/CreateWork', {
      Jobtitle: WorkDetails.Jobtitle,
      Company: WorkDetails.Company,
      StartDate: WorkDetails.StartDate,
      EndDate: WorkDetails.EndDate,
      Country: WorkDetails.Country,
      City: WorkDetails.City,
      Description: WorkDetails.Description,
      UserID: ID,
    })

    if (response.status === 201) {
      console.log('Data inserted successfully:', response.data)
      toast.success('WORK DETAILS SAVED')
      router.push(`/ResumeDetails/${ID}`)
    } else {
      console.error('Error inserting data:', response.data.message)
      alert('NO DATA SAVED')
    }
  } catch (err) {
    console.error('Unexpected error:', err)
    alert('data out')
  }
}
