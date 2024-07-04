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
import { textColors } from '../lib/ArraysForTheme'
import { borderColors } from '../lib/ArraysForTheme'
import { ThemeContext } from '../lib/Context'
const Theme = () => {
  const [index, setindex] = useState(0)
  const { theme, setTheme } = useContext(ThemeContext)
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
          <Palette /> <h1>Change Theme</h1>
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
              <div className=" grid grid-cols-4 sm:grid-cols-5 gap-2 border-2 border-slate-200 p-2 rounded-lg">
                {index == 0
                  ? textColors.map((color, index) => (
                      <div
                        onClick={() => HandleText(color)}
                        key={index}
                        className={` w-20
                     p-2 ${color} bg-opacity-50 border-2 cursor-pointer border-black text-center `}
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
