import Link from 'next/link'
import ReactHoverObserver from 'react-hover-observer'

import Avatar from './Avatar'

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
        <a className="logo">Logo</a>
      </Link>
      <ReactHoverObserver className="avatar-wrapper">
        <Avatar />
      </ReactHoverObserver>
    </header>
  )
}
