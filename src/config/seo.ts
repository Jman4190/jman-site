export const baseUrl = 'https://johnmannelly.com'
export const baseEmail = 'mannelly.john@gmail.com'

export const defaultSEO = {
  title: 'John "Jabe" Mannelly',
  description:
    'Online content creator and producer, living in San Francisco. Currently working as a PM at Houzz.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    site_name: 'John Mannelly',
    images: [
      {
        url: `${baseUrl}/static/meta/og-image.png`,
        alt: 'John Mannelly',
      },
    ],
  },
  twitter: {
    handle: '@jman4190',
    site: '@jman4190',
    cardType: 'summary_large_image',
  },
}

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

export function extendSEO(options: SEOProps) {
  const images = options.image
    ? [{ url: `${baseUrl}/static/${options.image}` }]
    : defaultSEO.openGraph.images

  return {
    ...defaultSEO,
    ...options,
    url: `${baseUrl}/${options.url}`,
    openGraph: {
      ...defaultSEO.openGraph,
      images,
      url: `${baseUrl}/${options.url}`,
    },
  }
}
