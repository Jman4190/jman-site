import * as React from 'react'
import Head from 'next/head'
import { Seo } from '~/components/Seo'

export default function SEO() {
  return (
    <React.Fragment>
      <Seo />
      <Head>
        <meta name="theme-color" content={'#fefefe'} />
        <link rel="apple-touch-icon" href="/static/meta/apple-touch-icon.png" />
        <link
          rel="mask-icon"
          href="/static/meta/mask-icon.svg"
          color={'#050505'}
        />
        <link rel="manifest" href="/static/meta/manifest.json" />
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
    </React.Fragment>
  )
}
