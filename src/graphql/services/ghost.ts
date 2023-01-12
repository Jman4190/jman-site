import GhostContentAPI from '@tryghost/content-api'

export const ghost = new GhostContentAPI({
  url: 'https://jman-dot-com.ghost.io',
  key: process.env.GHOST_API_KEY,
  version: 'v5.0',
})
