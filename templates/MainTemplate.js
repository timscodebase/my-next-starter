import { useContext } from 'react'
import { ThemeContext } from '../contexts/themeContext'
import { useRouter } from 'next/router'

import Footer from '../components/Footer'
import Header from '../components/Header'
import StyledPageWrapper from '../styles/StyledPageWrapper'
import StyledSubPageWrapper from '../styles/StyledSubPageWrapper'

export default function MainTemplate({ children }) {
  const { route } = useRouter()
  const { theme } = useContext(ThemeContext)
  return (
    <>
      {route === '/' ? (
        <StyledPageWrapper theme={theme}>
          <Header />
          <div className="container">{children}</div>
          <Footer />
        </StyledPageWrapper>
      ) : (
        <StyledSubPageWrapper theme={theme}>
          <Header />
          <div className="container">{children}</div>
          <Footer />
        </StyledSubPageWrapper>
      )}
    </>
  )
}
