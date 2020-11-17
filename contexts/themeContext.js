import { createContext, useContext, useEffect, useState } from 'react'

import { UserContext } from './userContext'

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
  const { user: oldUser, updateUser } = useContext(UserContext)
  const [theme, setTheme] = useState({
    name: 'lightBlue',
    bgColor: '#39ADE0',
    textColor: '#eeeeee',
    accentColor: '#E04F66',
  })

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    let lsTheme = ''

    if (user == null) {
      setTheme('lightBlue')
      return
    } else {
      console.log(user.theme)
      setTheme(user.theme)
    }
  }, [theme])

  const setNewTheme = (newTheme) => {
    if (localStorage.getItem('user') !== null) {
    } else {
      localStorage.setItem('theme', JSON.stringify(newTheme))
      const currentTheme = themes.find(({ name }) => name === newTheme)
      setTheme(currentTheme)
      console.log(theme)
      return
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, setNewTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }
