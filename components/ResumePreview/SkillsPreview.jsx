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
      // console.log(data)
    } catch (err) {
      console.error('Unexpected error:', err)
    }
  }

  useEffect(() => {
    getdata()
  }, [SkillData])

  return SkillData.length > 0 ? (
    <div className=" p-4 ">
      <h1 className=" font-bold text-xl">Skills</h1>
      <div className=" flex flex-col ">
        {SkillData.map((element, index) => {
          return (
            <div
              className=" rounded-lg flex justify-between cursor-pointer items-center p-2 gap-3  "
              key={index}
            >
              <h1 className=" py-3  capitalize font-extrabold">
                {element.Name}{' '}
              </h1>
              <div className=" h-[22px] w-60 bg-white border-2">
                <h1
                  className={`text-transparent  bg-green-500 ${
                    element.Skill_Level == 'Amateur' ? ' w-[20%] h-[20px]' : ''
                  }
              
              ${element.Skill_Level == 'Proficient' ? 'w-[60%] h-[20px]' : ''}
               
              ${element.Skill_Level == 'Competent' ? 'w-[40%] h-[20px] ' : ''}
               ${element.Skill_Level == 'Beginner' ? 'w-[10%] h-[20px] ' : ''}
                ${element.Skill_Level == 'Expert' ? 'w-[100%] h-[20px] ' : ''}

              
              `}
                >
                  Skill Level : {element.Skill_Level}
                </h1>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  ) : (
    <></>
  )
}

export default SkillsPreview
