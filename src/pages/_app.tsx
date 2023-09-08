import type { AppProps } from 'next/app'

import '@/styles/global.css';
import Appbar from '@/components/appbar';


export default function App({ Component, pageProps }: AppProps) {
  return (
  <Appbar>
    <Component {...pageProps} />
  </Appbar>
  )
}


