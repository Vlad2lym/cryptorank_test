import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html,
body {
  background-color: #d6dbdc;
}
`
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles /> 
      <Component {...pageProps} />
    </>
  )
}
