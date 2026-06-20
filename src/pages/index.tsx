import * as React from 'react'
import Link from 'next/link'
import Page from '~/components/Page'
import { CenteredColumn } from '~/components/Layouts'
import { MediumPost, getRecentPosts } from '~/data/writing'
import WritingSubscribeBox from '~/components/Writing/Subscribe'
import PostsList from '~/components/Writing/List'
import ProjectsList from '~/components/ProjectsList'
import Button from '~/components/Button'

interface Props {
  data: {
    posts: MediumPost[]
  }
}

function Home({ data }: Props) {
  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-16 md:space-y-24 ">
          <div className="space-y-8 md:items-center">
            <div className="prose lg:prose-lg text-primary">
              <p>
                Howdy, I&apos;m John. I&apos;m an online creator who tries to produce more than I consume. 
                You can get to know my voice through my sporadic {' '}
                <Link href="/writing">blog posts</Link>,{' '} 
                <a href="https://johnmannelly.substack.com/">monthly newsletter</a>,{' '}
                 or following my breadcrumbs on{' '}
                <a href="https://twitter.com/learnwithjabe">Twitter</a>.
                I&apos;m currently working in product at{' '}
                <a href="https://www.rula.com/">
                  Rula
                </a>
                . Previously at{' '}
                <a href="https://www.houzz.com/">Houzz</a>. 3x{' '}
                <a href="https://www.reforge.com">Reforge</a>
                {' '} alum.
              </p>

              <p>
                In my free time I focus on {' '}
                <a href="https://www.youtube.com/channel/UCOuzm2rfhw0ZXm-UyBVQ_8A">Learn With Jabe</a>,
                a YouTube channel teaching beginners how to code. 
                You'll find fun weekend projects focused on Python, SQL, GPT3, Web APIs, NBA Data, No Code Tools and more. 
                I am a firm believer that the best way to learn is to teach.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link href="/writing">
                <Button>Blog posts</Button>
              </Link>
              <a href="https://www.linkedin.com/in/johnmannelly">
                <Button>Linkedin</Button>
              </a>
            </div>
          </div>

          <WritingSubscribeBox />

          <div className="space-y-8">
            <h4 className="font-list-heading">Recent Writing</h4>
            <div className="space-y-6 ">
              {data && data.posts && <PostsList posts={data.posts} />}
            </div>
            <Link
              href="/writing"
              className="inline-block font-medium highlight-link-hover"
            >
              Read all posts &rarr;
            </Link>
          </div>

          <div className="space-y-8">
            <h4 className="font-list-heading">Side Projects</h4>
            <ProjectsList />
            <Link
              href="/projects"
              className="inline-block font-medium highlight-link-hover"
            >
              See all projects &rarr;
            </Link>
          </div>
        </div>
      </CenteredColumn>
    </Page>
  )
}

export async function getStaticProps() {
  const posts = getRecentPosts(3)

  return {
    props: {
      data: {
        posts,
      },
    },
  }
}

export default Home
