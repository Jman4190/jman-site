module.exports = {
  allowedDevOrigins: ['127.0.0.1'],
  async redirects() {
    return [
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
        source: '/bookmarks/:category(reading|portfolio|website)',
        destination: '/bookmarks',
        permanent: true,
      },
    ]
  },
}
