import type { AppProps } from 'next/app'
import Context from './Context'
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {

  const [value, setValue] = React.useState('');

  return (
    <Context.Provider value={{ canLog: true, value, setValue }}>
      <button onClick={() => {
        history.pushState(null, null, '/command')
      }}>command</button>
      <Component {...pageProps} />
    </Context.Provider>
  )
}
