import { useContext } from 'react'
import Link from 'next/link'
import Gravatar from 'react-gravatar'

import MainTemplate from '../templates/MainTemplate'

import { UserContext } from '../contexts/userContext'
import { ThemeContext } from '../contexts/themeContext'

export default function Profile() {
  const { user } = useContext(UserContext)
  const { theme } = useContext(ThemeContext)

  return (
    <MainTemplate>
      <h1>{user.name}</h1>
      <Gravatar className="profile-gravatar" email={user.email} size={400} />
      <h2>{user.email}</h2>
      <h3>{user.tagline}</h3>
      <p>{user.bio}</p>
      <Link href="/settings">
        <a>Update you profile Here -></a>
      </Link>
    </MainTemplate>
  )
}
