import { bookshelfQuotesByTitle } from './bookshelfQuotes'

export interface BookshelfQuote {
  id: string
  text: string
  takeaway?: string
  source?: string
}

export interface BookshelfBook {
  slug: string
  title: string
  coverImage: string
  spineColor: string
  textColor: string
  quotes: BookshelfQuote[]
  author?: string
}

const spineColors = [
  'rgb(219, 219, 219)',
  'rgb(76, 71, 39)',
  'rgb(251, 194, 70)',
  'rgb(22, 40, 34)',
  'rgb(246, 218, 60)',
  'rgb(243, 58, 34)',
  'rgb(84, 104, 255)',
  'rgb(41, 55, 74)',
  'rgb(194, 87, 67)',
  'rgb(41, 110, 82)',
]

const textColors = [
  'rgb(22, 25, 31)',
  'rgb(213, 213, 213)',
  'rgb(22, 25, 31)',
  'rgb(237, 238, 240)',
  'rgb(22, 25, 31)',
  'rgb(22, 25, 31)',
  'rgb(236, 242, 255)',
  'rgb(239, 243, 247)',
  'rgb(250, 234, 224)',
  'rgb(227, 245, 236)',
]

function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function titleToCoverPath(title: string): string {
  const filename = title.replace(/: /g, ' - ') + '.jpg'
  return `/static/img/bookshelf/${filename}`
}

interface BookSource {
  title: string
  author: string
}

const bookSources: BookSource[] = [
  {
    title: 'Antifragile: Things That Gain From Disorder',
    author: 'Nassim Taleb',
  },
  { title: 'Benjamin Franklin: An American Life', author: 'Walter Isaacson' },
  {
    title: 'Boomerang: Travels in the New Third World',
    author: 'Michael Lewis',
  },
  { title: 'Caesar: Life of a Colossus', author: 'Adrian Goldsworthy' },
  {
    title:
      'Chaos Monkeys: Obscene Fortune and Random Failure in Silicon Valley',
    author: 'Antonio Garcia Martinez',
  },
  { title: 'Chasing Perfection', author: 'Andy Glockner' },
  {
    title:
      'Competing Against Luck: The Story of Innovation and Customer Choice',
    author: 'Clayton M. Christensen',
  },
  { title: 'Contagious: Why Things Catch On', author: 'Jonah Berger' },
  {
    title:
      'Creativity Inc: Overcoming the Unseen Forces That Stand in the Way of True Inspiration',
    author: 'Ed Catmull',
  },
  {
    title:
      'Crossing the Chasm: Marketing and Selling Disruptive Products to Mainstream Customers',
    author: 'Geoffrey Moore',
  },
  {
    title:
      'David and Goliath: Underdogs Misfits and the Art of Battling Giants',
    author: 'Malcolm Gladwell',
  },
  { title: 'Eleven Rings: The Soul of Success', author: 'Phil Jackson' },
  { title: 'Everyday Zen (Plus)', author: 'Charlotte Joko Beck' },
  {
    title:
      'Hatching Twitter: A True Story About Money Power Friendship and Betrayal',
    author: 'Nick Bilton',
  },
  { title: 'High Output Management', author: 'Andy Grove' },
  {
    title: 'Hillbilly Elegy: A Memoir of a Family and Culture in Crisis',
    author: 'J.D. Vance',
  },
  { title: 'How To Win Friends and Influence People', author: 'Dale Carnegie' },
  {
    title: 'Jefferson and Hamilton: A Rivalry That Forged a Nation',
    author: 'John Ferling',
  },
  { title: 'Jobs To Be Done: Theory to Practice', author: 'Anthony W. Ulwick' },
  { title: 'Leonardo da Vinci', author: 'Walter Isaacson' },
  { title: 'Make It Stick', author: 'Peter C. Brown' },
  { title: "Man's Search for Meaning", author: 'Viktor E. Frankl' },
  { title: 'Next: The Future Just Happened', author: 'Michael Lewis' },
  {
    title:
      'Permission Marketing: Turning Strangers Into Friends and Friends Into Customers',
    author: 'Seth Godin',
  },
  {
    title: 'Platform Revolution',
    author:
      'Geoffrey G. Parker / Marshall W. Van Alstyne / Sangeet Paul Choudary',
  },
  {
    title: 'Positioning: The Battle For Your Mind',
    author: 'Al Ries and Jack Trout',
  },
  { title: 'Predictive Analytics', author: 'Eric Siegel' },
  { title: "Prisoner's Dilemma", author: 'William Poundstone' },
  { title: 'Rainbows End', author: 'Vernor Vinge' },
  { title: 'Sam Walton: Made in America', author: 'Sam Walton' },
  {
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
  },
  { title: 'Seneca', author: 'Lucius Annaeus Seneca' },
  { title: 'Shoe Dog', author: 'Phil Knight' },
  { title: 'Snow Crash', author: 'Neal Stephenson' },
  {
    title: 'The Structure of Scientific Revolutions',
    author: 'Thomas S. Kuhn',
  },
  {
    title: 'Superforecasting: The Art and Science of Prediction',
    author: 'Philip E. Tetlock and Dan Gardner',
  },
  { title: 'Television: A Biography', author: 'David Thomson' },
  { title: 'Thank You For Being Late', author: 'Thomas L. Friedman' },
  { title: 'The Art of War', author: 'Sun Tzu' },
  { title: 'The Breaks of the Game', author: 'David Halberstam' },
  { title: 'The Dip', author: 'Seth Godin' },
  { title: 'The Everything Store', author: 'Brad Stone' },
  { title: 'The Legend of Bagger Vance', author: 'Steven Pressfield' },
  {
    title: 'The Master Switch: The Rise and Fall of Information Empires',
    author: 'Tim Wu',
  },
  { title: 'The Score Takes Care of Itself', author: 'Bill Walsh' },
  {
    title: 'The Sovereign Individual',
    author: 'James Dale Davidson and William Rees-Mogg',
  },
  { title: 'The Tao of Physics', author: 'Fritjof Capra' },
  { title: 'The War of Art', author: 'Steven Pressfield' },
  { title: 'Thinking Fast and Slow', author: 'Daniel Kahneman' },
  { title: 'To Pixar and Beyond', author: 'Lawrence Levy' },
  {
    title: 'Traction: A Startup Guide to Getting Customers',
    author: 'Gabriel Weinberg and Justin Mares',
  },
  { title: 'Tribe: On Homecoming and Belonging', author: 'Sebastian Junger' },
  { title: 'Turning Pro', author: 'Steven Pressfield' },
  { title: 'Unbroken', author: 'Laura Hillenbrand' },
  { title: 'Walt Disney', author: 'Neal Gabler' },
  { title: 'We Are All Weird', author: 'Seth Godin' },
]

function buildBookshelfBooks(): BookshelfBook[] {
  const slugCounts = new Map<string, number>()

  return bookSources.map(({ title, author }, index) => {
    let slug = titleToSlug(title)
    const count = slugCounts.get(slug) ?? 0
    slugCounts.set(slug, count + 1)
    if (count > 0) {
      slug = `${slug}-${count}`
    }

    const spineColor = spineColors[index % spineColors.length]
    const textColor = textColors[index % textColors.length]
    const coverImage = titleToCoverPath(title)

    return {
      slug,
      title,
      author,
      coverImage,
      spineColor,
      textColor,
      quotes: bookshelfQuotesByTitle[title] ?? [],
    }
  })
}

export const bookshelfBooks: BookshelfBook[] = buildBookshelfBooks()
