class EncodedDynamicRouteAssetPlugin {
  apply(compiler) {
    compiler.hooks.thisCompilation.tap(
      'EncodedDynamicRouteAssetPlugin',
      (compilation) => {
        compilation.hooks.processAssets.tap(
          {
            name: 'EncodedDynamicRouteAssetPlugin',
            stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
          },
          (assets) => {
            Object.keys(assets).forEach((assetName) => {
              if (!assetName.includes('[') && !assetName.includes(']')) return

              const encodedAssetName = assetName
                .replace(/\[/g, '%5B')
                .replace(/\]/g, '%5D')

              if (!assets[encodedAssetName]) {
                compilation.emitAsset(encodedAssetName, assets[assetName])
              }
            })
          }
        )
      }
    )
  }
}

module.exports = {
  future: {
    webpack5: true,
  },
  images: {
    domains: ['pbs.twimg.com', 'overthought.ghost.io'],
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.plugins.push(new EncodedDynamicRouteAssetPlugin())
    }

    return config
  },
  async redirects() {
    return [
      {
        source: '/uses',
        destination: '/stack',
        permanent: true,
      },
      {
        source: '/design-details',
        destination: '/app-dissection',
        permanent: true,
      },
      {
        source: '/design-details/:slug',
        destination: '/app-dissection/:slug',
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
