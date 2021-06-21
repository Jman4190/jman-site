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
      description: 'Internet things, saved for later.',
      image: 'meta/bookmarks.png',
      url: 'bookmarks',
    }),
  },
  appDissection: {
    label: 'App Dissection',
    path: '/app-dissection',
    seo: extendSEO({
      title: 'App Dissection',
      description: 'In-depth design explorations.',
      image: 'meta/app-dissection.png',
      url: 'app-dissection',
    }),
  },
  login: {
    label: 'Login',
    path: '/login',
    seo: extendSEO({
      title: 'Login',
      description: 'What do you think you’re doing?',
      url: 'login',
    }),
  },
  stack: {
    label: 'Stack',
    path: '/stack',
    seo: extendSEO({
      title: 'Stack',
      description: 'My favorite tools and software.',
      image: 'meta/stack.png',
      url: 'stack',
    }),
  },
}

export default routes
