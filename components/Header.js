import next from 'next'
import Link from 'next/link'

import Avatar from './Avatar'

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
        <a className="logo">Logo</a>
      </Link>
      <Avatar />
    </header>
  )
}
