'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { supabase } from '../../lib/supabaseconfig'
import { useRouter } from 'next/navigation'
import { Trash2 } from 'lucide-react'
const SkillList = ({ ID }) => {
  const [SkillData, SetData] = useState([])
  const getdata = async () => {
    try {
      const { data, error } = await supabase
        .from('SkillDetails')
        .select('*')
        .eq('UserID', ID)

      if (error) {
        console.error('Error inserting data:', error.message)
        alert('NO DATA SAVED')
      } else {
        SetData(data)
        console.log(data)
      }
    } catch (err) {
      console.error('Unexpected error:', err)
    }
  }
  useEffect(() => {
    getdata()
  }, [])
  const DeleteData = async (itemid) => {
    try {
      const { data, error } = await supabase
        .from('SkillDetails')
        .delete()
        .eq('id', itemid)

      if (error) {
        console.error('Error inserting data:', error.message)
        alert('NO DATA SAVED')
      } else {
        console.log('Data inserted successfully:', data)
        getdata()
      }
    } catch (err) {
      console.error('Unexpected error:', err)
    }
  }
  const router = useRouter()

  return (
    <div className=" flex flex-col gap-5 mt-5">
      {SkillData.map((element, index) => {
        return (
          <div
            className="p-3 bg-slate-200 rounded-lg flex flex-col cursor-pointer "
            key={index}
          >
            <div className=" flex justify-between">
              <div
                className=" flex font-bold  gap-2 "
                onClick={() => router.push(`/Skills/${element.id}`)}
              >
                <h1 className=" capitalize">{element.Name} </h1> --
                <h1 className=" capitalize"> {element.Skill_Level}</h1>
              </div>
              <Trash2 onClick={() => DeleteData(element.id)} />
            </div>
          </div>
        )
      })}

      <button
        onClick={() => {
          router.push(`/CreateResumeData/${ID}/Skills`)
        }}
        className=" text-black rounded-lg p-3 border-2 border-slate-400"
      >
        ADD More Skills
      </button>
    </div>
  )
}

export default SkillList
