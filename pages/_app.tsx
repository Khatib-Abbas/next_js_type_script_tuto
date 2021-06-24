import * as React from 'react'
import Head from 'next/head'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@material-ui/core/CssBaseline'
import createCache from '@emotion/cache'
import { Provider } from 'next-auth/client'
export const cache = createCache({ key: 'css', prepend: true })

export default function MyApp(props: any): JSX.Element {
  const { Component, pageProps, initialThemeData }: any = props
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <CacheProvider value={cache}>
      <Head>
        <title>Tuto NextJs Ts</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={createTheme(initialThemeData)}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Provider
          // Provider options are not required but can be useful in situations where
          // you have a short session maxAge time. Shown here with default values.
          options={{
            // Client Max Age controls how often the useSession in the client should
            // contact the server to sync the session state. Value in seconds.
            // e.g.
            // * 0  - Disabled (always use cache value)
            // * 60 - Sync session state with server if it's older than 60 seconds
            clientMaxAge: 0,
            // Keep Alive tells windows / tabs that are signed in to keep sending
            // a keep alive request (which extends the current session expiry) to
            // prevent sessions in open windows from expiring. Value in seconds.
            //
            // Note: If a session has expired when keep alive is triggered, all open
            // windows / tabs will be updated to reflect the user is signed out.
            keepAlive: 0,
          }}
          session={pageProps.session}
        >
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  )
}
