import Link from 'next/link'

import MainTemplate from '../templates/MainTemplate'

export default function Home() {
  return (
    <MainTemplate>
      <main className="main">
        <h1 className="title">Welcome to my Testing Ground</h1>

        <p className="description">
          Each page will show of a small byte of code that I am testing and/or
          learning.
        </p>

        <div className="grid">
          <Link href="/proposal-temporal">
            <a className="card">
              <h3>Proposal Temporal &rarr;</h3>
              <p>
                Date has been a long-standing pain point in ECMAScript. Here I
                will be playing with a testing the proposed <code>Date</code>{' '}
                API via the provided polyfill
              </p>
            </a>
          </Link>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </MainTemplate>
  )
}
