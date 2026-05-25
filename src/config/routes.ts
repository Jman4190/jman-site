import { extendSEO, defaultSEO } from './seo'

const routes = {
  home: {
    label: 'Home',
    path: '/',
    seo: defaultSEO,
  },
  about: {
    label: 'About',
    path: '/about',
    seo: extendSEO({
      title: 'About',
      url: 'about',
    }),
  },
  projects: {
    label: 'Projects',
    path: '/projects',
    seo: extendSEO({
      title: 'Projects',
      description: 'Weekend side projects.',
      url: 'projects',
    }),
  },
  bookshelf: {
    label: 'Bookshelf',
    path: '/bookshelf',
    seo: extendSEO({
      title: 'Bookshelf',
      description: 'An interactive bookshelf of books I have read and loved.',
      image: 'meta/bookmarks.png',
      url: 'bookshelf',
    }),
  },
  writing: {
    label: 'Writing',
    path: '/writing',
    seo: extendSEO({
      title: 'Writing',
      description: 'The best way to learn is to teach.',
      image: 'meta/overthought.png',
      url: 'writing',
    }),
  },
  bookmarks: {
    label: 'Bookmarks',
    path: '/bookmarks',
    seo: extendSEO({
      title: 'Bookmarks',
      description: 'Internet masterpieces that I am constantly referencing',
      image: 'meta/bookmarks.png',
      url: 'bookmarks',
    }),
  },
}

export default routes
