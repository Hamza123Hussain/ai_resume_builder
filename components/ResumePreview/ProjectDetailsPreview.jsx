'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'

const ProjectDetailsPreview = ({ ID, theme }) => {
  const [ProjectData, SetData] = useState([])
  const getdata = async () => {
    try {
      const response = await fetch(`/api/Lists/Project?id=${ID}`)
      const data = await response.json()
      SetData(data)
      // console.log(data)
    } catch (err) {
      console.error('Unexpected error:', err)
    }
  }

  useEffect(() => {
    getdata()
  }, [ProjectData])

  return (
    <div className={`py-2 px-4 border-b-2 ${theme.Border}`}>
      <h1 className=" font-bold text-xl">Projects</h1>
      {ProjectData.map((element, index) => {
        return (
          <div
            className=" py-2 p-2  rounded-lg flex flex-col cursor-pointer gap-1 "
            key={index}
          >
            <h1 className=" font-extrabold capitalize">{element.Name} </h1>
            <h1 className=" capitalize text-sm  break-words whitespace-normal">
              {' '}
              {element.Description}
            </h1>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectDetailsPreview
