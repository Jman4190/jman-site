import * as React from 'react'
import { Post } from '~/graphql/types.generated'

interface Props {
  posts: Post[]
}

export default function PostsList({ posts }: Props) {
  if (!posts || posts.length === 0) return null

  return (
    <>
      {posts.map((post) => {
        const date = new Date(post.published_at).toLocaleDateString('en-us', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })

        return (
          <div className="space-y-1" key={post.id}>
            <a 
              href={post.medium_url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline font-medium text-primary highlight-link-hover"
            >
              {post.title}
            </a>
            {post.excerpt && <p className="text-tertiary">{post.excerpt}</p>}
            <p className="text-quaternary">{date}</p>
          </div>
        )
      })}
    </>
  )
}
