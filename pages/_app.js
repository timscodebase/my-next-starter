import { ThemeProvider } from '../contexts/themeContext'
import { UserProvider } from '../contexts/userContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ThemeProvider>
  )
}

export default MyApp
