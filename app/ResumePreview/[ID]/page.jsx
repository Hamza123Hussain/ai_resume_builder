'use client'
import React from 'react'
import FinalPreview from '../../../components/ResumePreview/FinalPreview'
const Page = ({ params }) => {
  return (
    <>
      <div id="kill" className="flex flex-col items-center justify-center mb-4">
        <h1>Your Resume is Ready To Be Downloaded</h1>
        <button
          className=" bg-green-400 text-white px-7 py-2"
          onClick={() => window.print()}
        >
          Download
        </button>
      </div>
      <div id="printme">
        <FinalPreview ID={params.ID} />
      </div>
    </>
  )
}

export default Page
