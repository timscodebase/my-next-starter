import { createContext, useEffect, useState } from 'react'

import { themes } from './themes'

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
  }) // Default themeName is lightBlue

  // On mount, read the preferred theme from the persistence
  useEffect(() => {
    const lsTheme = localStorage.getItem('theme')
    console.log(lsTheme)
    const currentTheme = themes.find(({ name }) => name === lsTheme)
    console.log(currentTheme)
    setTheme(currentTheme)
  }, [theme])

  // To set the new theme
  const setNewTheme = (newTheme) => {
    localStorage.setItem('theme', JSON.stringify(newTheme))
    const currentTheme = themes.find(({ name }) => name === newTheme)
    console.log(currentTheme)
    setTheme(currentTheme)
    alert(theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setNewTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }
