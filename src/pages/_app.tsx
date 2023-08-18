
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import '@/styles/Home.module.css'
import  "../pages/style/home.css"


export default function App({ Component, pageProps }: AppProps) {
  return  <ChakraProvider>
    <Component {...pageProps} />
    
    </ChakraProvider>
}
