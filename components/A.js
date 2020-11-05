import { useContext } from 'react'
import styled from 'styled-components'

import { ThemeContext } from '../contexts/themeContext'

const Styles = styled.a`
  color: ${({ theme }) => theme.accentColor};
  text-decoration: none;
  padding-bottom: 2px;
  border-bottom: 1px dotted ${({ theme }) => theme.accentColor};

  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.textColor};
    border-bottom: 1px dotted ${({ theme }) => theme.textColor};
  }
`

export default function A({ url, text }) {
  const { theme } = useContext(ThemeContext)
  return (
    <Styles theme={theme} href={url} target="_blank" rel="noopener noreferrer">
      {text}
    </Styles>
  )
}
