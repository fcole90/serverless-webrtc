import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import theme from '../styles/theming/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
