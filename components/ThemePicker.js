import { useContext, useState } from 'react'

import styles from './ThemePicker.module.css'

import themes from '../themes'

import { ThemeContext } from '../contexts/themeContext'

export default function ThemePicker() {
  const { theme, setNewTheme } = useContext(ThemeContext)
  const { currentTheme, setCurrentTheme } = useState(theme)

  return (
    <div className={styles.themePicker}>
      {themes.map((theme) => {
        const border = theme.isCurrent ? `1px ${theme.textColor} solid` : 'none'
        return (
          <div
            key={theme.name}
            style={{
              backgroundColor: theme.bgColor,
              border: border,
            }}
          ></div>
        )
      })}
    </div>
  )
}
