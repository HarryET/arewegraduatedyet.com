import { Footer } from '@/components/footer'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito_Sans } from 'next/font/google'

const nunito = Nunito_Sans({ weight: ["400", "700", "900"], subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`w-full h-full flex flex-col content-between ${nunito.className}`}>
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
