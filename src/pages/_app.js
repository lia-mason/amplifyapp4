import { createGlobalStyle } from 'styled-components'
import '../fonts.css'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Link from 'next/link'

const GlobalStyle = createGlobalStyle`

    body {
        font-family: 'Nunito', sans-serif;
        font-size: 15px;
        line-height: 1.2;
        background-color: white;
    }
    a {
        text-decoration: none;
    }
    ul {
        margin: 0 auto;
        list-style-type: none;
    }
    h1 {
        font-size: 30px;
        color: black;
        margin: 0 auto;
        text-align: center;
        padding-top: 15px;
    }
`

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyle />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
