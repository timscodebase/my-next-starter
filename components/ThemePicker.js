import { useContext } from 'react'
import ReactHoverObserver from 'react-hover-observer'

import styles from './ThemePicker.module.css'

import themes from '../themes'

import { ThemeContext } from '../contexts/themeContext'

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
                  onClick={() => setNewTheme(theme.name)}
                  style={{
                    backgroundColor: theme.bgColor,
                    border: border,
                  }}
                >
                  <div
                    className={styles.themeColors}
                    style={{ opacity: isHovering ? 1 : 0 }}
                  >
                    <div style={{ backgroundColor: theme.textColor }}></div>
                    <div style={{ backgroundColor: theme.accentColor }}></div>
                  </div>
                </div>
              )}
            </ReactHoverObserver>
          </div>
        )
      })}
    </div>
  )
}
