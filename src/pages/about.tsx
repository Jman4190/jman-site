import * as React from 'react'
import Image from 'next/image'
import Page from '~/components/Page'
import { CenteredColumn } from '~/components/Layouts'
import { NextSeo } from 'next-seo'
import routes from '~/config/routes'
import WritingSubscribeBox from '~/components/Writing/Subscribe'
import Link from 'next/link'

function About() {
  return (
    <Page>
      <NextSeo
        title={routes.about.seo.title}
        description={routes.about.seo.description}
        openGraph={routes.about.seo.openGraph}
      />

      <CenteredColumn>
        <div className="space-y-12 " data-cy="about-page">
          <div className="-mx-4 -mt-16 md:mt-0 md:-mx-8 ">
            <Image
              src="/static/img/about_jabe.jpg"
              alt={'A photo of me'}
              layout="responsive"
              width="672"
              height="448"
              className="md:rounded-lg"
            />
          </div>
          <div className="space-y-12 ">
            <div className="leading-relaxed prose ">
              <p>
                  Howdy, I&apos;m John. I&apos;m an online creator who tries to produce more than I consume. 
                  You can get to know my voice through my sporadic {' '}
                  <Link href="/writing" passHref>
                    <a>blog posts</a>
                  </Link>,{' '} 
                  <a href="https://www.getrevue.co/profile/jman4190">weekly newsletter</a>,{' '}
                  or following my breadcrumbs on{' '}
                  <a href="https://twitter.com/learnwithjabe">Twitter</a>.
                  I&apos;m currently working in product at {' '}
                  <a href="https://www.houzz.com">
                    Houzz
                  </a>
                  .
              </p>
              <p>
                In my free time I focus on {' '}
                <a href="https://www.youtube.com/channel/UCOuzm2rfhw0ZXm-UyBVQ_8A">Learn With Jabe</a>,
                a YouTube channel teaching beginners how to code. 
                You'll find fun weekend projects focused on Python, SQL, GPT3, Web APIs, NBA Data, No Code Tools and more. 
                I am a firm believer that the best way to learn is to teach.
              </p>
              <p>
              I have a friends and family newsletter where I write about why I’m liking certain tweets on Twitter. 
              It’s called{' '}
                <a href="https://www.getrevue.co/profile/jman4190">Jabes Twitter Musings</a>
                {' '}and if you’re interested to learn more you can get a taste here. 
              </p>
              <p>
                You can either follow me on{' '}
                <a href="https://twitter.com/jman4190">Twitter</a> or better yet, my{' '}
                <a href="https://twitter.com/learnwithjabe">bot</a> which retweets all of my likes. 
                I’ve been learning to code over the years and you can check in on my progress on{' '}
                <a href="https://github.com/jman4190">Github</a> where I share my repositories for others to build on.
              </p>
              <p>
                Photo by <a href="https://twitter.com/rxnjmmt">@rxnjmmt</a>.
              </p>
            </div>
          </div>

          <WritingSubscribeBox />

          <div className="space-y-6">
            <h4 className="font-list-heading">Speaking and interviews</h4>
            <div className="space-y-6">
              <div className="space-y-1">
                <a
                  className="font-medium highlight-link-hover"
                  href="https://layout.fm/episodes/194/"
                >
                  Layout.fm: It Ran Into the Wall of Reality
                </a>

                <p className="text-tertiary">
                  I spoke with Kevin and Rafa about the Staff Design project,
                  career ladders, imposter syndrome, and Paul Rudd.
                </p>
              </div>
              <div className="space-y-1">
                <a
                  className="font-medium highlight-link-hover"
                  href="https://www.swiftbysundell.com/podcast/67/"
                >
                  Building for open source
                </a>

                <p className="text-tertiary">
                  Ryan Nystrom and I talk about designing and building the
                  mobile apps at GitHub.
                </p>
              </div>

              <div className="space-y-1">
                <a
                  className="font-medium highlight-link-hover"
                  href="https://www.youtube.com/watch?v=SyS3h3kmBnY"
                >
                  Extend what’s possible with Figma Plugins - Figma Config
                </a>

                <p className="text-tertiary">
                  An exploration into the plugins I built to automate the
                  tedious parts of designing mobile apps at GitHub.
                </p>
              </div>

              <div className="space-y-1">
                <a
                  className="font-medium highlight-link-hover"
                  href="https://www.youtube.com/watch?v=6MBBTdu8v6E"
                >
                  Designing with GraphQL - GraphQL Summit
                </a>

                <p className="text-tertiary">
                  Exploring the possibilities that open up when designers and
                  developers can speak the same language.
                </p>
              </div>

              <div className="space-y-1">
                <a
                  className="font-medium highlight-link-hover"
                  href="https://interfacelovers.com/interviews/brian-lovin"
                >
                  Interface Lovers Interview
                </a>

                <p className="text-tertiary">
                  An interview about how I got into design, my process, and past
                  work.
                </p>
              </div>

              <div className="space-y-1">
                <a
                  className="font-medium highlight-link-hover"
                  href="https://spec.fm/podcasts/design-details/79352"
                >
                  Charmander++ – Interviewing ourselves on Design Details
                </a>

                <p className="text-tertiary">
                  Bryn Jackson and I interviewed each other. Totally humble.
                </p>
              </div>

              <div className="space-y-1">
                <a
                  className="font-medium highlight-link-hover"
                  href="https://avocode.com/blog/brian-lovin-product-designer-github-interview"
                >
                  Avocode Interview
                </a>

                <p className="text-tertiary">
                  An interview where we dig into my work at Buffer, Facebook,
                  Spectrum, and what’s in the works at GitHub.
                </p>
              </div>

              <div className="space-y-1">
                <a
                  className="font-medium highlight-link-hover"
                  href="https://softwareengineeringdaily.com/2020/07/15/github-mobile-with-brian-lovin-and-ryan-nystrom/"
                >
                  Software Engineering Daily: GitHub Mobile
                </a>

                <p className="text-tertiary">
                  Ryan and I discuss how we designed and built the first version
                  of GitHub’s mobile apps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CenteredColumn>
    </Page>
  )
}

export default About
