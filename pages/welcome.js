import Link from 'next/link'

import MainTemplate from '../templates/MainTemplate'

export default function Welcome() {
  return (
    <MainTemplate>
      <h1>Welcome!</h1>
      <h2>Thank you for coming to my site.</h2>
      <Link href="/settings">
        <a>
          <h3>Click here to setup your account</h3>
        </a>
      </Link>
      <Link href="/">
        <a>
          <h3>Or, click here to continue without an account</h3>
        </a>
      </Link>
    </MainTemplate>
  )
}
