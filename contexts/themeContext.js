import { createContext, useEffect, useState } from 'react'

import themes from '../themes'

const initialState = {
  theme: {
    name: 'lightBlue',
    bgColor: '#39ADE0',
    textColor: '#eeeeee',
    accentColor: '#E04F66',
  },
  setNewTheme: () => {},
}
const ThemeContext = createContext(initialState)

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({
    name: 'lightBlue',
    bgColor: '#39ADE0',
    textColor: '#eeeeee',
    accentColor: '#E04F66',
  })

  useEffect(() => {
    let lsTheme = ''

    if (localStorage.getItem('theme') == null) {
      lsTheme = 'lightBlue'
    } else {
      lsTheme = localStorage.getItem('theme').replace(/^"|"$/g, '')
    }

    const currentTheme = themes.find((o) => o.name === lsTheme)
    setTheme(currentTheme)
  }, [theme])

  const setNewTheme = (newTheme) => {
    localStorage.setItem('theme', JSON.stringify(newTheme))
    const currentTheme = themes.find(({ name }) => name === newTheme)
    setTheme(currentTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setNewTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }
