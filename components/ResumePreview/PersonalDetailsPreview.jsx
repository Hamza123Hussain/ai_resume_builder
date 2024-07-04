import React, { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseconfig'
import { AtSign, MapPin, Phone } from 'lucide-react'
const PerosnalDetailsPreview = ({ ID }) => {
  const [PerosnalDetailsPreview, setdetails] = useState({
    FirstName: '',
    LastName: '',
    Jobtitle: '',
    Country: '',
    City: '',
    PhoneNumber: '',
    EmailAddress: '',
  })

  const getdata = async () => {
    try {
      const { data, error } = await supabase
        .from('UserData')
        .select('*')
        .eq('ID', ID)

      if (error) {
        // console.error('Error fetching data:', error.message)
        // alert('NO DATA SAVED')
      } else {
        console.log(data)
        if (data.length > 0) {
          setdetails(data[0]) // Assuming data is an array and you want the first item
        }
      }
    } catch (err) {
      console.error('Unexpected error:', err)
    }
  }

  useEffect(() => {
    getdata()
  }, [PerosnalDetailsPreview])

  return (
    <div className=" flex flex-col gap-2 ">
      <div className=" flex flex-col justify-center items-center gap-1">
        <h1 className=" text-xl font-bold">
          {PerosnalDetailsPreview.FirstName} {PerosnalDetailsPreview.LastName}
        </h1>
        <h1 className=" text-sm">{PerosnalDetailsPreview.Jobtitle}</h1>
      </div>
      <div className="  text-sm flex justify-between items-center p-2 border-b-2 border-red-600">
        <h1 className=" flex gap-1 items-center">
          <AtSign size={12} /> {PerosnalDetailsPreview.EmailAddress}{' '}
        </h1>
        <h1 className=" flex gap-1 items-center">
          {' '}
          <Phone size={12} /> {PerosnalDetailsPreview.PhoneNumber}
        </h1>
        <h1 className=" capitalize flex gap-1 items-center">
          <MapPin size={12} />
          {PerosnalDetailsPreview.City} , {PerosnalDetailsPreview.Country}
        </h1>
      </div>
    </div>
  )
}

export default PerosnalDetailsPreview
