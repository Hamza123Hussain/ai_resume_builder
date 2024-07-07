'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { supabase } from '../../lib/supabaseconfig'

const SkillsPreview = ({ ID }) => {
  const [SkillData, SetData] = useState([])

  const getdata = async () => {
    try {
      const response = await fetch(`/api/Lists/Skill?id=${ID}`)
      const data = await response.json()
      SetData(data)
      console.log(data)
    } catch (err) {
      console.error('Unexpected error:', err)
    }
  }

  useEffect(() => {
    getdata()
  }, [])

  return (
    <div className=" p-4 ">
      <h1 className=" font-bold text-xl">Skills</h1>
      {SkillData.map((element, index) => {
        return (
          <div
            className="py-3  rounded-lg flex justify-between cursor-pointer p-2  "
            key={index}
          >
            <h1 className=" capitalize font-extrabold">{element.Name} </h1>
            <h1 className=" capitalize">
              {' '}
              Skill Level : {element.Skill_Level}
            </h1>
          </div>
        )
      })}
    </div>
  )
}

export default SkillsPreview
