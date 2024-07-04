// components/EducationDetailsForm.js
import React from 'react'
import InputField from './InputField'
import TextAreaField from './TextAreaField'

const EducationDetailsForm = ({ EducationDetailss, ChangeInput, onSave }) => (
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
        label="State"
        name="State"
        value={EducationDetailss.State}
        onChange={ChangeInput}
        placeholder="Enter State"
      />
    </div>
    <TextAreaField
      label="Description"
      name="Description"
      value={EducationDetailss.Description}
      onChange={ChangeInput}
      placeholder="Enter Job Description"
    />
    <div onClick={onSave} className="flex justify-end mt-5">
      <button className="bg-green-600 text-white rounded-lg p-2">Save</button>
    </div>
  </div>
)

export default EducationDetailsForm
