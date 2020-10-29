import { useState, useEffect, useRef } from 'react'

import styles from './ThemePicker.module.css'

export default function ColorsDropdown({ isHovering, theme }) {
  const [themeRight, setThemeRight] = useState(0)
  const [viewportWidth, setViewportWidth] = useState(0)
  const themeColorsRef = useRef(null)

  useEffect(() => {
    const { innerWidth: width } = window
    setViewportWidth(width)
    const { right } = themeColorsRef.current.getBoundingClientRect()
    setThemeRight(right)
  }, [])

  return (
    <div
      className={styles.themeColors}
      style={{
        opacity: isHovering ? 1 : 0,
        height: isHovering ? '96px !important' : '0px !important',
        overflow: isHovering ? 'visible' : 'hidden',
        flexDirection: themeRight > viewportWidth ? 'row-reverse' : 'row',
        right: themeRight > viewportWidth ? '-2px' : 'initial',
      }}
      ref={themeColorsRef}
    >
      <div className={styles.colors}>
        <div
          className={styles.extendedColor}
          style={{ backgroundColor: theme.bgColor }}
        ></div>
        <div
          className={styles.extendedColor}
          style={{ backgroundColor: theme.textColor }}
        ></div>
        <div
          className={styles.extendedColor}
          style={{ backgroundColor: theme.accentColor }}
        ></div>
      </div>
      <div
        className={styles.descriptions}
        style={{
          textAlign: themeRight > viewportWidth ? 'right' : 'left',
          marginRight: themeRight > viewportWidth ? '5px' : '0',
        }}
      >
        <div>
          <span>Background</span>
        </div>
        <div>
          <span>Text</span>
        </div>
        <div>
          <span>Accent</span>
        </div>
      </div>
    </div>
  )
}
