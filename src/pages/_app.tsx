
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app.js'
import { SidebarDrawerContextProvider } from '../contexts/SidebarDrawerContext'
import { startMakeServer } from '../services/mirage'
import { theme } from '../styles/theme'

import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { queryClient } from '../services/queryClient'

if (process.env.NODE_ENV === 'development') {
  startMakeServer()
}




function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerContextProvider>
          <Component {...pageProps} />
        </SidebarDrawerContextProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  )

}

export default MyApp
