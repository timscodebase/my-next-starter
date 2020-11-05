import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function Code({ children }) {
  return <SyntaxHighlighter language="javascript">{children}</SyntaxHighlighter>
}
