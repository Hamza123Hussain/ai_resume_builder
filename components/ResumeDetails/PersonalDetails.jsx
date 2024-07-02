import React, { useState } from 'react'
import { supabase } from '../../lib/supabaseconfig'
const PersonalDetails = ({ ID }) => {
  const [PersonalDetails, setdetails] = useState({
    FirstName: '',
    LastName: '',
    Jobtitle: '',
    Address: '',
    PhoneNumber: '',
    EmailAddress: '',
  })
  const ChangeInput = (e) => {
    setdetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const UpdateData = async () => {
    try {
      const { data, error } = await supabase
        .from('UserData')
        .update({
          FirstName: PersonalDetails.FirstName,
          LastName: PersonalDetails.LastName,
          Jobtitle: PersonalDetails.Jobtitle,
          Address: PersonalDetails.Address,
          PhoneNumber: PersonalDetails.PhoneNumber,
          EmailAddress: PersonalDetails.EmailAddress,
        })
        .eq('ID', ID)

      if (error) {
        console.error('Error inserting data:', error.message)
        alert('NO DATA SAVED')
      } else {
        console.log('Data inserted successfully:', data)
      }
    } catch (err) {
      console.error('Unexpected error:', err)
    }
  }

  return (
    <div className=" flex flex-col">
      <div className=" flex flex-col ">
        <h1 className=" font-bold text-lg">Personal Details</h1>
        <h5>Add Basic Information About Yourself</h5>
      </div>
      <div>
        <div className=" flex flex-col sm:flex-row  gap-2 ">
          <div className=" flex flex-col w-full">
            <label className="px-2">First Name</label>
            <input
              name="FirstName"
              value={PersonalDetails.FirstName}
              onChange={(e) => ChangeInput(e)}
              className=" p-2 border-2 border-slate-300 rounded-lg"
              type="text"
              placeholder="Enter Your First Name"
              required
            />
          </div>
          <div className=" flex flex-col w-full">
            <label className="px-2"> Last Name</label>
            <input
              name="LastName"
              value={PersonalDetails.LastName}
              onChange={(e) => ChangeInput(e)}
              className="  p-2 border-2 border-slate-300 rounded-lg"
              type="text"
              placeholder="Enter Your Last Name"
              required
            />
          </div>
        </div>
        <div className=" flex flex-col w-full mt-5">
          <label className=" flex px-2 gap-2">
            Job Title <h6 className=" text-slate-400 text-sm">Optional</h6>
          </label>
          <input
            value={PersonalDetails.Jobtitle}
            name="Jobtitle"
            onChange={(e) => ChangeInput(e)}
            className="p-2 border-2 border-slate-300 rounded-lg"
            type="text"
            placeholder="Enter Your Job Title"
          />
        </div>

        <div className=" flex flex-col w-full mt-5">
          <label className="px-2">Address</label>
          <input
            onChange={(e) => ChangeInput(e)}
            value={PersonalDetails.Address}
            name="Address"
            className="p-2 border-2 border-slate-300 rounded-lg"
            type="text"
            placeholder="Enter Your Complete Address"
            required
          />
        </div>
        <div className=" flex flex-col sm:flex-row  gap-2 mt-5 ">
          <div className=" flex flex-col w-full">
            <label className="px-2">Phone</label>
            <input
              value={PersonalDetails.PhoneNumber}
              name="PhoneNumber"
              onChange={(e) => ChangeInput(e)}
              className=" p-2 border-2 border-slate-300 rounded-lg"
              type="number"
              placeholder="Enter Your Phone Number"
              required
            />
          </div>
          <div className=" flex flex-col w-full ">
            <label className="px-2"> Email</label>
            <input
              value={PersonalDetails.EmailAddress}
              name="EmailAddress"
              onChange={(e) => ChangeInput(e)}
              className="  p-2 border-2 border-slate-300 rounded-lg"
              type="text"
              placeholder="Enter Your Email Address"
              required
            />
          </div>
        </div>

        <div className=" flex justify-end mt-5">
          <button
            onClick={() => UpdateData()}
            className=" bg-green-300 text-white rounded-lg p-2"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default PersonalDetails
