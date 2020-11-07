import next from 'next'
import Link from 'next/link'

import ThemePicker from '../components/ThemePicker'

export default function Footer() {
  return (
    <footer className="footer">
      <ThemePicker />
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
      </a>
    </footer>
  )
}
