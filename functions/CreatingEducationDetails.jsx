import axios from 'axios'
export const CreateData = async (EducationDetailss, router, ID) => {
  try {
    const response = await axios.post('/api/createEducationDetail', {
      DegreeName: EducationDetailss.DegreeName,
      institueName: EducationDetailss.institueName,
      StartDate: EducationDetailss.StartDate,
      EndDate: EducationDetailss.EndDate,
      Country: EducationDetailss.Country,
      State: EducationDetailss.State,
      Description: EducationDetailss.Description,
      UserID: ID,
    })

    if (response.status === 201) {
      console.log('Data inserted successfully:', response.data)
      alert('data in')
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
