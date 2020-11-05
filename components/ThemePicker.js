import { useContext, useState } from 'react'
import ReactHoverObserver from 'react-hover-observer'

import { ThemeContext } from '../contexts/themeContext'

import themes from '../themes'
import styles from './ThemePicker.module.css'
import MainThemeColor from '../components/MainThemeColor'

export default function ThemePicker() {
  const { theme } = useContext(ThemeContext)
  const [isOpen, setIsOpen] = useState(false)
  const toggleThemePicker = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div
      className={styles.themePanel}
      style={{
        top: isOpen ? '0' : '-50px',
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
              <MainThemeColor
                toggleThemePicker={toggleThemePicker}
                theme={theme}
              />
            </ReactHoverObserver>
          </div>
        )
      })}
      <div
        onClick={toggleThemePicker}
        className={styles.openPicker}
        style={{ color: theme.textColor }}
      >
        Set Site Theme
      </div>
    </div>
  )
}
