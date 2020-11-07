import next from 'next'
import Link from 'next/link'

import ThemePicker from '../components/ThemePicker'

export default function Header() {
  return (
    <header className="header">
      <ThemePicker />
      <Link href="/">
        <a className="logo">Logo</a>
      </Link>
    </header>
  )
}
