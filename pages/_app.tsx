import type { AppProps } from 'next/app'
import Context from './Context'
import React from 'react';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {

  const [value, setValue] = React.useState('');

  return (
    <Context.Provider value={{ canLog: true, value, setValue }}>
      <Component {...pageProps} />
    </Context.Provider>
  )
}
