import * as React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import { defaultSEO } from '~/config/seo'

export default function SEO() {
  const router = useRouter()

  let emoji = '👾'
  if (router.route.indexOf('/about') === 0) emoji = '👋'
  if (router.route.indexOf('/writing') === 0) emoji = '🤔'
  if (router.route.indexOf('/app-dissection') === 0) emoji = '✨'
  if (router.route.indexOf('/bookmarks') === 0) emoji = '📖'

  return (
    <React.Fragment>
      <DefaultSeo {...defaultSEO} />
      <Head>
        <meta name="theme-color" content={'#fefefe'} />
        <link rel="apple-touch-icon" href="/static/meta/apple-touch-icon.png" />
        <link
          rel="mask-icon"
          href="/static/meta/mask-icon.svg"
          color={'#050505'}
        />
        <link rel="manifest" href="/static/meta/manifest.json" />
        <link
          rel="icon"
          href="/static/favicon.ico"
        />
      </Head>
    </React.Fragment>
  )
}
