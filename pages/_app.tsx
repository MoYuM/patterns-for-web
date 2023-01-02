import type { AppProps } from 'next/app'
import React from 'react';
import '../styles/global.css';
import Layout from 'components/layout';
import MdLayout from 'components/mdLayout';

export default function App({ Component, pageProps, router }: AppProps) {

  if (router.pathname.includes('patterns')) {
    return (
      <MdLayout>
        <Component {...pageProps} />
      </MdLayout>
    )
  } else {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}
