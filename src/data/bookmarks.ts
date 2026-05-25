export interface Bookmark {
  title: string
  url: string
  host: string
  description?: string
}

export interface BookmarkSection {
  title: string
  description: string
  bookmarks: Bookmark[]
}

export const bookmarkSections: BookmarkSection[] = [
  {
    title: 'Blog posts',
    description: 'Posts and essays worth revisiting.',
    bookmarks: [
      {
        title: 'How to Do Great Work',
        url: 'https://paulgraham.com/greatwork.html',
        host: 'paulgraham.com',
        description: 'A useful reference on ambition, taste, and craft.',
      },
      {
        title: "Maker's Schedule, Manager's Schedule",
        url: 'https://paulgraham.com/makersschedule.html',
        host: 'paulgraham.com',
        description: 'A durable framing for protecting deep work.',
      },
    ],
  },
  {
    title: 'Websites',
    description: 'Personal sites and internet spaces with taste.',
    bookmarks: [
      {
        title: 'Maggie Appleton',
        url: 'https://maggieappleton.com',
        host: 'maggieappleton.com',
        description: 'Durable notes, visual essays, and thoughtful structure.',
      },
      {
        title: 'Read.cv',
        url: 'https://read.cv',
        host: 'read.cv',
        description: 'A polished example of professional profiles.',
      },
    ],
  },
  {
    title: 'Podcasts',
    description: 'Shows I return to for ideas, interviews, and perspective.',
    bookmarks: [
      {
        title: 'Invest Like the Best',
        url: 'https://joincolossus.com/episodes',
        host: 'joincolossus.com',
        description: 'Long-form conversations about business and investing.',
      },
      {
        title: 'Acquired',
        url: 'https://www.acquired.fm',
        host: 'acquired.fm',
        description: 'Company stories with useful strategic context.',
      },
    ],
  },
  {
    title: 'Tools and references',
    description: 'Useful things for building, writing, and publishing.',
    bookmarks: [
      {
        title: 'Tailwind CSS',
        url: 'https://tailwindcss.com',
        host: 'tailwindcss.com',
        description: 'A practical toolkit for designing quickly in code.',
      },
      {
        title: 'Next.js',
        url: 'https://nextjs.org',
        host: 'nextjs.org',
        description: 'The framework this site runs on.',
      },
    ],
  },
]
