module.exports = {
  images: {
    domains: ['pbs.twimg.com', 'overthought.ghost.io'],
  },
  async redirects() {
    return [
      {
        source: '/uses',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/stack',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/security',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/bookmarks',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/bookmarks/:category',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/app-dissection',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/app-dissection/:slug',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/login',
        destination: '/',
        permanent: true,
      },
      {
        source: '/logout',
        destination: '/',
        permanent: true,
      },
      {
        source: '/design-details',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/design-details/:slug',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/journal',
        destination: '/writing',
        permanent: true,
      },
      {
        source: '/overthought',
        destination: '/writing',
        permanent: true,
      },
      {
        source: '/overthought/:slug',
        destination: '/writing/:slug',
        permanent: true,
      },
    ]
  },
}
