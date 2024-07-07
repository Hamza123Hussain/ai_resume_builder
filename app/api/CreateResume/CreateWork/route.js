import { NextResponse } from 'next/server'
import { supabase } from '../../../../lib/supabaseconfig'

export const POST = async (req) => {
  try {
    const payload = await req.json()

    const { data, error } = await supabase.from('WorkExperience').insert([
      {
        Jobtitle: payload.Jobtitle,
        Company: payload.Company,
        StartDate: payload.StartDate,
        EndDate: payload.EndDate,
        Country: payload.Country,
        City: payload.City,
        Description: payload.Description,
        UserID: payload.UserID,
      },
    ])

    if (error) {
      console.error('Error inserting data:', error.message)
      return NextResponse.json({ message: error.message }, { status: 500 })
    } else {
      console.log('Data inserted successfully:', data)
      return NextResponse.json(
        { message: 'Data inserted successfully', data },
        { status: 201 }
      )
    }
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { message: 'Unexpected error occurred' },
      { status: 500 }
    )
  }
}
