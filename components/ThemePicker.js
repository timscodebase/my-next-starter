import { useContext } from 'react'
import ReactHoverObserver from 'react-hover-observer'

import themes from '../themes'

import styles from './ThemePicker.module.css'

import { ThemeContext } from '../contexts/themeContext'

import ColorsDropDown from './ColorsDropDown'

export default function ThemePicker() {
  const { setNewTheme } = useContext(ThemeContext)

  return (
    <div className={styles.themePanel}>
      {themes.map((theme) => {
        const border = theme.isCurrent ? `1px ${theme.textColor} solid` : 'none'
        return (
          <div className={styles.themePicker} key={theme.name}>
            <ReactHoverObserver>
              {({ isHovering }) => (
                <div
                  className={styles.mainThemeColor}
                  onClick={() => setNewTheme(theme.name)}
                  style={{
                    backgroundColor: theme.bgColor,
                    border: border,
                  }}
                >
                  {isHovering ? (
                    <ColorsDropDown isHovering={isHovering} theme={theme} />
                  ) : null}
                </div>
              )}
            </ReactHoverObserver>
          </div>
        )
      })}
    </div>
  )
}
