import styled from 'styled-components'

const StyledSubPageWrapper = styled.div`
  background-color: ${({ theme }) => theme.bgColor};

  .container {
    min-height: 100vh;
    padding: 2rem 4rem;
    color: ${({ theme }) => theme.textColor};
  }

  .main {
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .logo {
    height: 1em;
    font-size: 2rem;
    color: ${({ theme }) => theme.accentColor};
  }

  .header {
    width: 100%;
    height: 100px;
    padding: 0 1.5rem;
    color: ${({ theme }) => theme.bgColor};
    background-color: ${({ theme }) => theme.textColor};
    border-bottom: 2px solid ${({ theme }) => theme.accentColor};
    display: flex;
    align-items: center;
  }

  .profile-gravatar {
    width: 400px;
    height: 400px;
    border-radius: 100%;
    border: 2px solid ${({ theme }) => theme.accentColor};
  }

  .footer {
    width: 100%;
    height: 100px;
    color: ${({ theme }) => theme.bgColor};
    background-color: ${({ theme }) => theme.textColor};
    border-top: 2px solid ${({ theme }) => theme.accentColor};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer img {
    margin-left: 0.5rem;
  }

  .footer a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title a {
    color: ${({ theme }) => theme.accentColor};
    text-decoration: none;
  }

  .title a:hover,
  .title a:focus,
  .title a:active {
    text-decoration: underline;
  }

  .title {
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
  }

  .title,
  .description {
    text-align: center;
  }

  .description {
    line-height: 1.5;
    font-size: 1.5rem;
  }

  .code {
    background: ${({ theme }) => theme.accentColor};
    border-radius: 5px;
    padding: 0.75rem;
    font-size: 1.1rem;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
  }

  @media (max-width: 1000px) {
    .grid {
      width: 100%;
      flex-direction: column;
    }

    .container {
      padding: 1rem;
      flex-wrap: wrap !important;
      flex-direction: column-reverse !important;
    }

    .profile-gravatar {
      width: 90vw !important;
      height: 90vw !important;
      margin: 0 auto;
    }
  }
`

export default StyledSubPageWrapper
