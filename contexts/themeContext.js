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
  }) // Default themeName is lightBlue

  // On mount, read the preferred theme from the persistence
  useEffect(() => {
    // Get theme from localStorage and remove the wrapping quotes
    const lsTheme = localStorage.getItem('theme').replace(/^"|"$/g, '')
    const currentTheme = themes.find((o) => o.name === lsTheme)
    currentTheme.isCurrent = true
    setTheme(currentTheme)
  }, [theme])

  // To set the new theme
  const setNewTheme = (newTheme) => {
    localStorage.setItem('theme', JSON.stringify(newTheme))
    const currentTheme = themes.find(({ name }) => name === newTheme)
    console.log(currentTheme)
    setTheme(currentTheme)
    console.log(theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setNewTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }
