'use client'
import React, { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseconfig'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import Loader from '../Loader'
import { AIgenerate } from '../../functions/AiGenerate'
import { MoveLeft } from 'lucide-react'

const ProjectDetails = ({ ID }) => {
  const [ProjectDetails, SetDetails] = useState({
    Name: '',
    Description: '',
  })
  const Router = useRouter()
  const [getdataloading, setgetloading] = useState(true)
  const [loading, setloading] = useState(false)
  const ChangeInput = (e) => {
    SetDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const CreateData = async () => {
    try {
      const { data, error } = await supabase
        .from('ProjectDetails')
        .update({
          Name: ProjectDetails.Name,
          Description: ProjectDetails.Description,
        })
        .eq('id', ID) // Add the condition to specify which row to update

      if (error) {
        // console.error('Error updating data:', error.message)
        // alert('NO DATA SAVED')
        toast.error('FILL IN ALL THE FIELDS')
      } else {
        console.log('Data updated successfully:', data)
        toast.success('Data has been Updated')
        Router.back()
      }
    } catch (err) {
      console.error('Unexpected error:', err)
      // alert('Unexpected error occurred')
      Router.back()
    }
  }

  const getdata = async () => {
    try {
      const { data, error } = await supabase
        .from('ProjectDetails')
        .select('*')
        .eq('id', ID) // Filter by the id

      if (error) {
        // console.error('Error fetching data:', error.message)
        // alert('NO DATA SAVED')
      } else {
        console.log(data)
        if (data.length > 0) {
          SetDetails(data[0]) // Assuming data is an array and you want the first item
          setgetloading(false)
        }
      }
    } catch (err) {
      console.error('Unexpected error:', err)
    }
  }
  const CallAi = async () => {
    setloading(true)
    const data = await AIgenerate(ProjectDetails.Description)
    SetDetails((prev) => ({ ...prev, Description: data }))
    toast.success('Description Generated From AI')
    setloading(false)
  }

  useEffect(() => {
    getdata()
  }, [ID])
  if (getdataloading) {
    return (
      <>
        <Loader />
      </>
    )
  }

  return (
    <div className=" p-4">
      <div
        onClick={() => Router.back()}
        className=" px-2 mb-4 cursor-pointer flex items-center gap-2 border-2 rounded-lg w-fit hover:bg-black hover:text-white"
      >
        <MoveLeft size={50} />
        <h1 className=" text-lg font-bold">Go Back</h1>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h1 className="font-bold text-lg">Add Your Skills</h1>
        </div>
        <div>
          <div className="flex flex-col gap-5 mt-3">
            <div className="flex flex-col w-full">
              <label className="px-2">Project Name</label>
              <input
                name="Name"
                value={ProjectDetails.Name}
                onChange={ChangeInput}
                className="p-2 border-2 border-slate-300 rounded-lg"
                type="text"
                placeholder="Enter Project Name"
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="px-2">Add A Project Description</label>
              {loading ? (
                <Loader />
              ) : (
                <textarea
                  name="Description"
                  value={ProjectDetails.Description}
                  onChange={ChangeInput}
                  cols={10}
                  rows={3}
                  className=" border-2 border-slate-700 rounded-lg p-2"
                  placeholder="Provide A Description About Your Project.You can Also generate the description through AI, but you would need to provide it 2-3 line description to work properly"
                />
              )}
            </div>
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
              onClick={CreateData}
              className="bg-green-600 text-white rounded-lg p-2"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
