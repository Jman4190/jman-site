import Head from 'next/head'
import { defaultSEO } from '~/config/seo'

interface SeoProps {
  title?: string
  description?: string
  openGraph?: {
    url?: string
    title?: string
    description?: string
    site_name?: string
    images?: Array<{
      url: string
      alt?: string
    }>
  }
}

export function Seo({ title, description, openGraph }: SeoProps) {
  const metaTitle = title || defaultSEO.title
  const metaDescription = description || defaultSEO.description
  const og = openGraph || {
    ...defaultSEO.openGraph,
    title: metaTitle,
    description: metaDescription,
  }
  const image = og.images?.[0]

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={og.title || metaTitle} />
      <meta property="og:description" content={og.description || metaDescription} />
      {og.url && <meta property="og:url" content={og.url} />}
      {og.site_name && <meta property="og:site_name" content={og.site_name} />}
      {image && <meta property="og:image" content={image.url} />}
      {image?.alt && <meta property="og:image:alt" content={image.alt} />}
      <meta name="twitter:card" content={defaultSEO.twitter.cardType} />
      <meta name="twitter:site" content={defaultSEO.twitter.site} />
      <meta name="twitter:creator" content={defaultSEO.twitter.handle} />
    </Head>
  )
}
