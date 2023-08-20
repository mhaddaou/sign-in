import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MyContextProvider } from '@/components/Context'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyContextProvider>
      <Component {...pageProps} />
    </MyContextProvider>
  )
}
