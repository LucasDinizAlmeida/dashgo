
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app.js'
import { SidebarDrawerContextProvider } from '../contexts/SidebarDrawerContext'
import { theme } from '../styles/theme'

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
