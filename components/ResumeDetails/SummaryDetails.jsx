'use client'
import React from 'react'
import { chatSessions } from '../../lib/GoogleGemniModel'
import { useState } from 'react'

const SummaryDetails = () => {
  const [profile, setProfile] = useState('')
  const SendAnswerForFeedBack = async () => {
    const FeedBackPrompt = `Read the ${profile} completely and then give a 3-6 line breif profile that the user can add in their resume. Just give back the breif profile for the given text and nothing else `

    const Gemni_Response = await chatSessions.sendMessage(FeedBackPrompt)

    console.log(Gemni_Response)

    const MockJsonResponse = Gemni_Response.response.text()
    setProfile(MockJsonResponse)

    console.log(MockJsonResponse)
  }

  return (
    <div className=" flex flex-col">
      <div className=" flex-col flex">
        <label className=" p-2">Write A Profile</label>
        <textarea
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
          cols={10}
          rows={3}
          className=" border-2 border-slate-700 rounded-lg p-2"
          placeholder="Provide a breif description about what you are and aspire to become"
        />
      </div>
      <div className=" flex justify-end">
        <button
          onClick={() => SendAnswerForFeedBack()}
          className="p-2 mt-5 bg-green-500 rounded-lg text-white"
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default SummaryDetails
