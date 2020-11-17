import { useContext, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Gravatar from 'react-gravatar'
import styled from 'styled-components'

import { UserContext } from '../contexts/userContext'
import { ThemeContext } from '../contexts/themeContext'

const StyledAvatar = styled.div`
  display: grid;
  place-items: center;
  margin-left: auto;
  margin-right: -12px;
  position: relative;

  .gravatar {
    width: 65px;
    height: 65px;
    border-radius: 100%;
    border: 2px solid ${(props) => props.theme.accentColor};
  }

  .menu {
    position: absolute;
    left: -110px;
    display: flex;
    flex-direction: column;
    height: 100px;
    width: 100px;
    padding: 1.5rem 1rem;
    opacity: 0;

    a {
      color: ${(props) => props.theme.accentColor};
      margin-bottom: 10px;

      &:hover {
        font-weight: bold;
      }
    }
  }
`

export default function Avatar({ isHovering = false }) {
  const { user } = useContext(UserContext)
  const { theme } = useContext(ThemeContext)
  console.log(theme)
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  return (
    <StyledAvatar theme={theme} onClick={() => router.push('/profile')}>
      <Gravatar className="gravatar" email={user.email} />
      <div
        className="menu"
        style={{
          opacity: isHovering ? 1 : 0,
        }}
      >
        <Link href="/profile">
          <a>Profile</a>
        </Link>
        <Link href="/settings">
          <a>Settings</a>
        </Link>
      </div>
    </StyledAvatar>
  )
}
