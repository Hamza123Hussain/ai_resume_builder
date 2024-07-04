import axios from 'axios'

export const CreateData = async (WorkDetails, ID, Router) => {
  try {
    const response = await axios.post('/api/CreateWork', {
      Jobtitle: WorkDetails.Jobtitle,
      Company: WorkDetails.Company,
      StartDate: WorkDetails.StartDate,
      EndDate: WorkDetails.EndDate,
      Country: WorkDetails.Country,
      State: WorkDetails.State,
      Description: WorkDetails.Description,
      UserID: ID,
    })

    if (response.status === 201) {
      console.log('Data inserted successfully:', response.data)
      alert('Data inserted successfully')
      Router.back()
    } else {
      console.error('Error inserting data:', response.data.message)
      alert('NO DATA SAVED')
    }
  } catch (err) {
    console.error('Unexpected error:', err)
    alert('Unexpected error occurred')
  }
}
