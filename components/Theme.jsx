import { Palette } from 'lucide-react'
import React, { useContext, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog'

import { ThemeContext } from '../lib/Context'
const Theme = () => {
  const [index, setindex] = useState(0)
  const { theme, setTheme } = useContext(ThemeContext)
  const textColors = [
    'text-red-500',
    'text-blue-500',
    'text-green-500',
    'text-yellow-500',
    'text-purple-500',
    'text-pink-500',
    'text-indigo-500',
    'text-gray-500',
    'text-teal-500',
    'text-orange-500',
  ]

  // Array for border colors
  const borderColors = [
    'border-red-500',
    'border-blue-500',
    'border-green-500',
    'border-yellow-500',
    'border-purple-500',
    'border-pink-500',
    'border-indigo-500',
    'border-gray-500',
    'border-teal-500',
    'border-orange-500',
  ]

  const HandleText = (color) => {
    setTheme((prev) => ({ ...prev, Text: color }))
  }
  const HandleBorder = (color) => {
    setTheme((prev) => ({ ...prev, Border: color }))
  }
  //   console.log(theme)

  return (
    <>
      <Dialog className="p-4">
        <DialogTrigger className=" flex gap-2 items-center">
          <Palette /> <h1 className=" ">Change Theme</h1>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className=" flex gap-2 items-center  p-2">
              {' '}
              <button
                onClick={() => setindex(0)}
                className={`bg-gray-200 rounded-lg p-3 ${
                  index == 0 ? 'text-green-400' : ''
                }`}
              >
                Text Color
              </button>{' '}
              <button
                onClick={() => setindex(1)}
                className={`bg-gray-200 rounded-lg p-3 ${
                  index == 1 ? 'text-green-400' : ''
                }`}
              >
                Border Color
              </button>
            </DialogTitle>
            <DialogDescription>
              <div className=" grid grid-cols-3 sm:grid-cols-5 gap-2 border-2 border-slate-200 p-2 rounded-lg">
                {index == 0
                  ? textColors.map((textcolor, index) => (
                      <div
                        onClick={() => HandleText(textcolor)}
                        key={index}
                        className={` w-20
                     p-2 ${textcolor} bg-opacity-50 border-2 cursor-pointer border-black text-center `}
                      >
                        Text
                      </div>
                    ))
                  : borderColors.map((color, index) => (
                      <div
                        onClick={() => HandleBorder(color)}
                        key={index}
                        className={` p-4 cursor-pointer  w-20 border-2 ${color} text-black `}
                      ></div>
                    ))}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Theme
