// components/EducationDetailsForm.js
import React from 'react'
import InputField from './InputField'
import Loader from '../../Loader'

const EducationDetailsForm = ({
  EducationDetailss,
  ChangeInput,
  onSave,
  CallAi,
  loading,
}) => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-2 mt-3">
        <InputField
          label="Degree Name"
          name="DegreeName"
          value={EducationDetailss.DegreeName}
          onChange={ChangeInput}
          placeholder="Enter The Name Of Your Degree"
        />
        <InputField
          label="Institue Name"
          name="institueName"
          value={EducationDetailss.institueName}
          onChange={ChangeInput}
          placeholder="Enter The Name Of Your Institue"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 mt-3">
        <InputField
          label="Start Date"
          name="StartDate"
          value={EducationDetailss.StartDate}
          onChange={ChangeInput}
          type="date"
        />
        <InputField
          label="End Date"
          name="EndDate"
          value={EducationDetailss.EndDate}
          onChange={ChangeInput}
          type="date"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 mt-3">
        <InputField
          label="Country"
          name="Country"
          value={EducationDetailss.Country}
          onChange={ChangeInput}
          placeholder="Enter Country"
        />
        <InputField
          label="City"
          name="City"
          value={EducationDetailss.City}
          onChange={ChangeInput}
          placeholder="Enter City"
        />
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
            placeholder="Enter Job Description"
            className="p-2 border-2 border-slate-300 rounded-lg"
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
            : 'CREATE A DESCRIPTION WITH AI'}
        </button>
        <button
          onClick={onSave}
          className="bg-green-600 text-white rounded-lg p-2"
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default EducationDetailsForm
