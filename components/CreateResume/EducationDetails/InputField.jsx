// components/InputField.js
import React from 'react'

const InputField = ({
  label,
  name,
  value,
  onChange,
  type = 'text',
  placeholder,
}) => (
  <div className="flex flex-col w-full">
    <label className="px-2">{label}</label>
    <input
      name={name}
      value={value}
      onChange={onChange}
      className="p-2 border-2 border-slate-300 rounded-lg"
      type={type}
      placeholder={placeholder}
      required
    />
  </div>
)

export default InputField
