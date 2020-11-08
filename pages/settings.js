import { useContext } from 'react'
import { useRouter } from 'next/router'
import { Formik } from 'formik'
import styled from 'styled-components'

import MainTemplate from '../templates/MainTemplate'
import ThemePicker from '../components/ThemePicker'

import { UserContext } from '../contexts/userContext'
import { ThemeContext } from '../contexts/themeContext'

const Form = styled.form`
  width: 500px;
  padding: 1rem;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.accentColor};

  @media (max-width: 1000px) {
    width: 90vw;
    margin: 0 auto;
  }

  .label {
    color: ${(props) => props.theme.textColor};
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: -1rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 5px;
  }

  textarea {
    height: 150px;
  }
`

export default function Settings() {
  const { user, updateUser } = useContext(UserContext)
  const { theme } = useContext(ThemeContext)
  const router = useRouter()

  return (
    <MainTemplate>
      <h1>Hi {user.name}!</h1>
      <h2>Wanna update your settings?</h2>
      <h3>Set your theme</h3>
      <ThemePicker />
      <p>Your theme will persist and you can change it when ever you want</p>

      <Formik
        initialValues={{ ...user }}
        onSubmit={(values, actions) => {
          updateUser(values)
          actions.setSubmitting(false)
          actions.resetForm({
            values: {
              name: '',
              email: '',
              tagline: '',
              bio: '',
            },
          })
          router.push('/profile')
        }}
      >
        {(props) => (
          <Form theme={theme} onSubmit={props.handleSubmit}>
            <p className="label">
              <label htmlFor="name">First Name</label>
            </p>
            <p>
              <input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                name="name"
              />
            </p>
            <p className="label">
              <label htmlFor="email">Email</label>{' '}
            </p>
            <p>
              <input
                type="email"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.email}
                name="email"
              />
            </p>
            <p className="label">
              <label htmlFor="tagline">Tagline</label>
            </p>
            <p className="label">
              <input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.tagline}
                name="tagline"
              />
            </p>
            <p className="label">
              <label htmlFor="bio">Bio</label>
            </p>
            <p>
              <textarea
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.bio}
                name="bio"
              />
            </p>
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            {props.errors.email && (
              <div id="feedback">{props.errors.email}</div>
            )}
            {props.errors.tagline && (
              <div id="feedback">{props.errors.tagline}</div>
            )}
            {props.errors.bio && <div id="feedback">{props.errors.bio}</div>}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </MainTemplate>
  )
}
