export interface MediumPost {
  id: string;
  title: string;
  slug: string;
  published_at: string;
  excerpt?: string;
  medium_url: string;
}

// Replace this array with your actual Medium posts
export const mediumPosts: MediumPost[] = [
  {
    id: '1',
    title: 'The Power of Podcasting',
    slug: 'the-power-of-podcasting-d60f1fd007b9',
    published_at: '2013-08-13T00:00:00.000Z',
    excerpt: 'My content marketing efforts to help plug a podcast.',
    medium_url: 'https://jman4190.medium.com/the-power-of-podcasting-d60f1fd007b9'
  },
  {
    id: '2',
    title: 'SeatGeek Aims to Be a Market-Mover',
    slug: 'seatgeek-aims-to-be-a-market-mover-ba4315b528ab',
    published_at: '2016-01-07T00:00:00.000Z',
    excerpt: 'Don’t be fooled by the, “Kayak for Ticket Sales,” SeatGeek is aiming to become the, “Airbnb for Ticketed Events.”',
    medium_url: 'https://jman4190.medium.com/seatgeek-aims-to-be-a-market-mover-ba4315b528ab'
  },
  // Add more posts as needed
]; 