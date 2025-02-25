import { mediumPosts } from '~/data/writing'

export async function getPosts(_, { first = 'all' }) {
  // Sort posts by published_at in descending order
  const sortedPosts = [...mediumPosts].sort((a, b) => 
    new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
  );
  
  // If first is a number, limit the results
  return first === 'all' ? sortedPosts : sortedPosts.slice(0, Number(first));
}

export async function getPost(_, { slug }) {
  return mediumPosts.find(post => post.slug === slug) || null;
}
