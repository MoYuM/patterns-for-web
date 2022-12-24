import type { AppProps } from 'next/app'
import React from 'react';
import '../styles/global.css';
import { MDXProvider } from '@mdx-js/react';
import Layout from 'components/layout';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <MDXProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  )
}
