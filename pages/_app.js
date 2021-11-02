import { App } from 'tailwind-mobile/react'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <App theme="material">
      <Component {...pageProps} />
    </App>
  )
}

export default MyApp