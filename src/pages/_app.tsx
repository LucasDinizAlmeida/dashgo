
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app.js'
import { SidebarDrawerContextProvider } from '../contexts/SidebarDrawerContext'
import { startMakeServer } from '../services/mirage'
import { theme } from '../styles/theme'

if (process.env.NODE_ENV === 'development') {
  startMakeServer()
}


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerContextProvider>
        <Component {...pageProps} />
      </SidebarDrawerContextProvider>
    </ChakraProvider>
  )

}

export default MyApp
