// components/TextAreaField.js
import React from 'react'

const TextAreaField = ({ label, name, value, onChange, placeholder }) => (
  <div className="flex flex-col w-full mt-3">
    <label className="px-2">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      className="p-2 border-2 border-slate-300 rounded-lg"
      placeholder={placeholder}
      required
    />
  </div>
)

export default TextAreaField
