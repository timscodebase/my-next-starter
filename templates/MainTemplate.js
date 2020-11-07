import { useContext } from 'react'
import { ThemeContext } from '../contexts/themeContext'

import Footer from '../components/Footer'
import Header from '../components/Header'
import StyledPageWrapper from '../styles/StyledPageWrapper'

export default function MainTemplate({ children }) {
  const { theme } = useContext(ThemeContext)
  return (
    <StyledPageWrapper theme={theme}>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </StyledPageWrapper>
  )
}
