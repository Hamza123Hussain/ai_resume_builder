'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Add_Resume = () => {
  const Router = useRouter()
  return (
    <div>
      <button
        onClick={() => Router.push('./ResumeDetails')}
        className=" p-3 bg-slate-200 rounded-lg"
      >
        Create A new Resume
      </button>
    </div>
  )
}

export default Add_Resume
