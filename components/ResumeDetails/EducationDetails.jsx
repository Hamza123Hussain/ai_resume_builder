'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'

import { supabase } from '../../lib/supabaseconfig'
import { useRouter } from 'next/navigation'

const EducationDetails = ({ ID }) => {
  const [EducationDetailss, setEducationDetailss] = useState({
    DegreeName: '',
    institueName: '',
    StartDate: '',
    EndDate: '',
    Country: '',
    State: '',
    Description: '',
  })
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
            State: EducationDetailss.State,
            Description: EducationDetailss.Description,
            UserID: ID,
          },
        ])
        .eq('id', ID) // Add the condition to specify which row to update

      if (error) {
        // console.error('Error inserting data:', error.message)
        // alert('NO DATA SAVED')
      } else {
        console.log('Data inserted successfully:', data)
        alert('data in')
        router.back()
      }
    } catch (err) {
      console.error('Unexpected error:', err)
      alert('data out')
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
        }
      }
    } catch (err) {
      console.error('Unexpected error:', err)
    }
  }

  useEffect(() => {
    getdata()
  }, [ID])
  return (
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
            <label className="px-2">State</label>
            <input
              name="State"
              value={EducationDetailss.State}
              onChange={ChangeInput}
              className="p-2 border-2 border-slate-300 rounded-lg"
              type="text"
              placeholder="Enter State"
              required
            />
          </div>
        </div>
        <div className="flex flex-col w-full mt-3">
          <label className="px-2">Description</label>
          <textarea
            name="Description"
            value={EducationDetailss.Description}
            onChange={ChangeInput}
            className="p-2 border-2 border-slate-300 rounded-lg"
            placeholder="Enter Job Description"
            required
          />
        </div>
        <div onClick={() => CreateData()} className="flex justify-end mt-5">
          <button className="bg-green-600 text-white rounded-lg p-2">
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default EducationDetails
