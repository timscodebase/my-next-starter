import styled from 'styled-components'

const StyledPageWrapper = styled.div`
  background-color: ${({ theme }) => theme.bgColor};

  .container {
    min-height: 100vh;
    padding: 0;
    display: flex;
    /* flex-direction: column;
    justify-content: center;
    align-items: center; */
    position: relative;
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

  .content,
  .photo {
    width: 50%;
  }

  .content {
  }

  .photo {
    min-height: 100%;
    background-image: url(${({ theme }) => theme.photo});
    /* background-image: url('https://images.pexels.com/photos/3894157/pexels-photo-3894157.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'); */
    background-size: cover;
    box-shadow: inset 10px 0px 28px -4px rgba(0, 0, 0, 0.75);
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

  .avatar-wrapper {
    margin-left: auto;
  }

  .grid {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
    margin-top: 3rem;
  }

  .card {
    margin: 1rem;
    flex-basis: 45%;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 2px solid ${({ theme }) => theme.accentColor};
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
  }

  .card:hover,
  .card:focus,
  .card:active {
    color: ${({ theme }) => theme.accentColor};
    border-color: ${({ theme }) => theme.accentColor};
  }

  .card h3 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  .card p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }

  @media (max-width: 1000px) {
    .grid {
      width: 100%;
      flex-direction: column;
    }

    .container {
      flex-wrap: wrap !important;
      flex-direction: column-reverse !important;
    }

    .content,
    .photo {
      width: 100% !important;
    }

    .photo {
      min-height: 50% !important;
    }
  }
`

export default StyledPageWrapper
