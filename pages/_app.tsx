import type { AppProps } from 'next/app'
import React from 'react';
import '../styles/global.css';
import { MDXProvider } from '@mdx-js/react';

export default function App({ Component, pageProps }: AppProps) {


  return (
    <MDXProvider>
      <Component {...pageProps} />
    </MDXProvider>
  )
}
