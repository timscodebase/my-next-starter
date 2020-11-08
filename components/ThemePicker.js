import { useContext } from 'react'
import ReactHoverObserver from 'react-hover-observer'

import { ThemeContext } from '../contexts/themeContext'

import themes from '../themes'
import styles from './ThemePicker.module.css'
import MainThemeColor from '../components/MainThemeColor'

export default function ThemePicker() {
  const { theme } = useContext(ThemeContext)
  return (
    <div
      className={styles.themePanel}
      style={{
        backgroundColor: theme.textColor,
      }}
    >
      {themes.map((theme) => {
        return (
          <div className={styles.themePicker} key={theme.name}>
            <ReactHoverObserver
              {...{
                onMouseOver: ({ setIsHovering }) => {
                  setIsHovering()
                },
                onMouseLeave: ({ unsetIsHovering }) => {
                  unsetIsHovering()
                },
              }}
            >
              <MainThemeColor theme={theme} />
            </ReactHoverObserver>
          </div>
        )
      })}
    </div>
  )
}
