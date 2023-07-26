import type { AppProps } from 'next/app'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'
import { cacheRTL, theme } from '@/utils/theme'

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}
