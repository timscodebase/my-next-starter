import Head from 'next/head'
import { useContext } from 'react'

import ThemePicker from '../components/ThemePicker'

import { ThemeContext } from '../contexts/themeContext'

import StyledPageWrapper from '../styles/StyledPageWrapper'

export default function MainTemplate({ children }) {
  const { theme } = useContext(ThemeContext)
  return (
    <StyledPageWrapper theme={theme}>
      <div className="container">
        <ThemePicker />
        <Head>
          <title>Testing Ground</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {children}
        <footer className="footer">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
          </a>
        </footer>
      </div>
    </StyledPageWrapper>
  )
}
