import { NextResponse } from 'next/server'
import { supabase } from '../../../../lib/supabaseconfig'

export const GET = async (req) => {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')

    const { data, error } = await supabase
      .from('WorkExperience')
      .select('*')
      .eq('UserID', id)

    if (error) {
      console.error('Error fetching data:', error.message)
      return NextResponse.json({ message: error.message }, { status: 500 })
    } else {
      return NextResponse.json(data, { status: 200 })
    }
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { message: 'Unexpected error occurred' },
      { status: 500 }
    )
  }
}

export const DELETE = async (req) => {
  try {
    const { searchParams } = new URL(req.url)
    const itemid = searchParams.get('itemid')

    const { data, error } = await supabase
      .from('WorkExperience')
      .delete()
      .eq('id', itemid)

    if (error) {
      console.error('Error deleting data:', error.message)
      return NextResponse.json({ message: error.message }, { status: 500 })
    } else {
      return NextResponse.json(
        { message: 'Data deleted successfully', data },
        { status: 200 }
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
