'use client'
import React, { useEffect, useState } from 'react'

import { supabase } from '../../lib/supabaseconfig'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import Loader from '../Loader'
import { AIgenerate } from '../../functions/AiGenerate'
import { MoveLeft } from 'lucide-react'

const EducationDetails = ({ ID }) => {
  const [EducationDetailss, setEducationDetailss] = useState({
    DegreeName: '',
    institueName: '',
    StartDate: '',
    EndDate: '',
    Country: '',
    City: '',
    Description: '',
  })
  const [getdataloading, setgetloading] = useState(true)
  const [loading, setloading] = useState(false)
  const router = useRouter()
  const ChangeInput = (e) => {
    setEducationDetailss((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const CreateData = async () => {
    try {
      const { data, error } = await supabase
        .from('EducationDetails')
        .update([
          {
            DegreeName: EducationDetailss.DegreeName,
            institueName: EducationDetailss.institueName,
            StartDate: EducationDetailss.StartDate,
            EndDate: EducationDetailss.EndDate,
            Country: EducationDetailss.Country,
            City: EducationDetailss.City,
            Description: EducationDetailss.Description,
          },
        ])
        .eq('id', ID) // Add the condition to specify which row to update

      if (error) {
        // console.error('Error inserting data:', error.message)
        // alert('NO DATA SAVED')
        toast.error('FILL ALL THE FIELDS')
      } else {
        console.log('Data inserted successfully:', data)

        toast.success('Data has been Updated')
        router.back()
      }
    } catch (err) {
      console.error('Unexpected error:', err)
      toast.error('ENTER ALL THE DETAILS')
    }
  }
  const getdata = async () => {
    try {
      const { data, error } = await supabase
        .from('EducationDetails')
        .select('*')
        .eq('id', ID) // Filter by the id

      if (error) {
        // console.error('Error fetching data:', error.message)
        // alert('NO DATA SAVED')
      } else {
        console.log(data)
        if (data.length > 0) {
          setEducationDetailss(data[0]) // Assuming data is an array and you want the first item
          setgetloading(false)
        }
      }
    } catch (err) {
      console.error('Unexpected error:', err)
    }
  }

  const CallAi = async () => {
    setloading(true)
    const data = await AIgenerate(EducationDetailss.Description)
    setEducationDetailss((prev) => ({ ...prev, Description: data }))
    toast.success('Description Generated From AI')
    setloading(false)
  }
  useEffect(() => {
    getdata()
  }, [ID])
  if (getdataloading) {
    return (
      <>
        <Loader />
      </>
    )
  }

  return (
    <div className=" p-4">
      <div
        onClick={() => router.back()}
        className=" px-2 mb-4 cursor-pointer flex items-center gap-2 border-2 rounded-lg w-fit hover:bg-black hover:text-white"
      >
        <MoveLeft size={50} />
        <h1 className=" text-lg font-bold">Go Back</h1>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h1 className="font-bold text-lg">Education Details</h1>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row gap-2 mt-3">
            <div className="flex flex-col w-full">
              <label className="px-2">Degree Name</label>
              <input
                name="DegreeName"
                value={EducationDetailss.DegreeName}
                onChange={ChangeInput}
                className="p-2 border-2 border-slate-300 rounded-lg"
                type="text"
                placeholder="Enter The Name Of Your Degree"
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="px-2">Institue Name</label>
              <input
                name="institueName"
                value={EducationDetailss.institueName}
                onChange={ChangeInput}
                className="p-2 border-2 border-slate-300 rounded-lg"
                type="text"
                placeholder="Enter The Name Of Your Institue"
                required
              />
            </div>
          </div>{' '}
          <div className="flex flex-col sm:flex-row gap-2 mt-3">
            <div className="flex flex-col w-full">
              <label className="px-2">Start Date</label>
              <input
                name="StartDate"
                value={EducationDetailss.StartDate}
                onChange={ChangeInput}
                className="p-2 border-2 border-slate-300 rounded-lg"
                type="date"
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="px-2">End Date</label>
              <input
                name="EndDate"
                value={EducationDetailss.EndDate}
                onChange={ChangeInput}
                className="p-2 border-2 border-slate-300 rounded-lg"
                type="date"
                required
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 mt-3">
            <div className="flex flex-col w-full">
              <label className="px-2">Country</label>
              <input
                name="Country"
                value={EducationDetailss.Country}
                onChange={ChangeInput}
                className="p-2 border-2 border-slate-300 rounded-lg"
                type="text"
                placeholder="Enter Country"
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="px-2">City</label>
              <input
                name="City"
                value={EducationDetailss.City}
                onChange={ChangeInput}
                className="p-2 border-2 border-slate-300 rounded-lg"
                type="text"
                placeholder="Enter City"
                required
              />
            </div>
          </div>
          <div className="flex flex-col w-full mt-3">
            <label className="px-2">Description</label>
            {loading ? (
              <Loader />
            ) : (
              <textarea
                name="Description"
                value={EducationDetailss.Description}
                onChange={ChangeInput}
                className="p-2 border-2 border-slate-300 rounded-lg"
                placeholder="Enter Education Description. You can Also generate the description through AI, but you would need to provide it 2-3 line description to work properly"
                required
              />
            )}
          </div>
          <div className="flex justify-end mt-5 gap-5 p-2">
            <button
              onClick={CallAi}
              className={` transition ${
                loading ? 'animate-pulse' : ''
              } bg-blue-500 text-white rounded-lg p-2`}
            >
              {loading
                ? 'GENERATING DESCRIPTION FROM AI'
                : 'UPDATE  DESCRIPTION WITH AI'}
            </button>
            <button
              onClick={CreateData}
              className="bg-green-600 text-white rounded-lg p-2"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationDetails
