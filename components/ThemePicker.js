import ReactHoverObserver from 'react-hover-observer'

import themes from '../themes'
import styles from './ThemePicker.module.css'
import MainThemeColor from '../components/MainThemeColor'

export default function ThemePicker() {
  return (
    <div className={styles.themePanel}>
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
                touchstart: ({ setIsHovering }) => {
                  setIsHovering()
                  unsetIsHovering()
                },
                touchend: ({ unsetIsHovering }) => {},
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
