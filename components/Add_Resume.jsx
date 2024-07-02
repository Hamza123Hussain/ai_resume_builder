'use client'

import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './dialog'
import { supabase } from '../lib/supabaseconfig'
import { useUser } from '@clerk/nextjs'
import ResumeCard from './ResumeCard'
const Add_Resume = () => {
  const [dialogopen, setdialog] = useState(false)
  const [loading, setloader] = useState(false)
  const [title, settitle] = useState('')
  const { user } = useUser()
  const handleSubmit = async () => {
    if (!title) {
      console.error('Title is required')
      return
    }

    try {
      setloader(true)
      const { data, error } = await supabase.from('UserData').insert([
        {
          UserTitle: title,
          CreatedBy: user.primaryEmailAddress?.emailAddress,
        },
      ])

      if (error) {
        console.error('Error inserting data:', error.message)
        alert('NO DATA SAVED')
      } else {
        console.log('Data inserted successfully:', data)
        alert('RESUME HAS BEEN CREATED')
        setdialog(false)
        setloader(false)
      }
    } catch (err) {
      console.error('Unexpected error:', err)
    }
  }

  return (
    <div>
      <Dialog open={dialogopen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add A Title For Your Resume</DialogTitle>
            <DialogDescription>
              <div className=" flex flex-col gap-2">
                <input
                  value={title}
                  onChange={(e) => settitle(e.target.value)}
                  className="  p-3 border-2 border-slate-400 rounded-lg"
                  type="text"
                  placeholder="Enter A Title Name For Your Resume "
                />
                <div className=" flex flex-col sm:flex-row justify-end gap-3">
                  {' '}
                  <button
                    className=" bg-white border-2 border-slate-800 rounded-lg py-2 px-10 text-black font-bold hover:brightness-50"
                    onClick={() => setdialog(false)}
                  >
                    close
                  </button>
                  <button
                    onClick={() => handleSubmit()}
                    className="py-2 px-10 bg-green-400 rounded-lg text-white hover:brightness-110"
                  >
                    {loading ? (
                      <div className=" flex items-center gap-2">
                        <span> Creating A Resume</span>
                        <div class="spinner"></div>
                      </div>
                    ) : (
                      'Create A Resume'
                    )}
                  </button>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <button
        onClick={() => setdialog(true)}
        className=" p-3 bg-slate-200 rounded-lg"
      >
        Create A new Resume
      </button>

      <h1 className=" px-4 py-2 font-bold text-xl sm:text-2xl">
        Previous Created Resumes
      </h1>

      <ResumeCard />
    </div>
  )
}

export default Add_Resume
