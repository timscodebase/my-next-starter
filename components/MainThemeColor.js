import { useContext } from 'react'
import ColorsDropdown from './ColorsDropdown'

import { ThemeContext } from '../contexts/themeContext'
import styles from './ThemePicker.module.css'

export default function MainThemeColor({ isHovering = false, theme }) {
  const { setNewTheme } = useContext(ThemeContext)
  return (
    <div
      className={styles.mainThemeColor}
      onClick={() => {
        setNewTheme(theme.name)
      }}
      style={{
        backgroundColor: theme.bgColor,
      }}
    >
      {isHovering ? (
        <ColorsDropdown isHovering={isHovering} theme={theme} />
      ) : null}
    </div>
  )
}
