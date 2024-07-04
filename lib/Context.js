'use client'

import { createContext, useState } from 'react'

export const ThemeContext = createContext(null)
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({ Border: '', Text: '' })

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
