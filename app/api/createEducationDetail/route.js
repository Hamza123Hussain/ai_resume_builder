import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_SECRET
)

export const POST = async (req) => {
  try {
    const payload = await req.json()

    const { data, error } = await supabase.from('EducationDetails').insert([
      {
        DegreeName: payload.DegreeName,
        institueName: payload.institueName,
        StartDate: payload.StartDate,
        EndDate: payload.EndDate,
        Country: payload.Country,
        State: payload.State,
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
