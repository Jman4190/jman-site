import * as React from 'react'
import Link from 'next/link'

function ProjectsList() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <a
          href="https://www.youtube.com/channel/UCOuzm2rfhw0ZXm-UyBVQ_8A"
          className="font-medium highlight-link-hover"
        >
          Learn With Jabe
        </a>

        <p className="text-tertiary">
          A YouTube channel featuring Jabe Jableson, a struggling influencer and aspiring edutainer.
          Learn to code by doing hands-on projects with NBA data, GPT-3 and Spotify APIs.
        </p>
      </div>

      <div className="space-y-1">
        <a
          href="https://www.udemy.com/course/build-a-nba-fantasy-projection-model-in-python-with-pandas/?referralCode=8E0ABFF3AF3A7C2D2D19"
          className="font-medium highlight-link-hover"
        >
          NBA Fantasy Basketball Projection Model
        </a>

        <p className="text-tertiary">
          In this Udemy class you'll build an NBA Fantasy Projection model in python with Pandas.
          DM me on Twitter to get a free code.
        </p>
      </div>

      <div className="space-y-1">
        <a
          href="https://drake-100.webflow.io"
          className="font-medium highlight-link-hover"
        >
          Drake Top 100 Songs
        </a>

        <p className="text-tertiary">
          A custom Webflow site where Drake fans upvoted his top 100 songs of all time.
        </p>
      </div>

      <div className="space-y-1">
        <a
          href="https://www.udemy.com/course/build-a-twitter-bot-with-python-tweepy-and-the-twitter-api/?referralCode=67751699BE11EF0933C2"
          className="font-medium highlight-link-hover"
        >
          Twitter Bot
        </a>

        <p className="text-tertiary">
          In this free Udemy class you'll build a Twitter bot that automatically retweets your likes.
        </p>
      </div>

      <div className="space-y-1">
        <a
          href="https://www.udemy.com/course/build-a-twitter-bot-with-python-tweepy-and-the-twitter-api/?referralCode=67751699BE11EF0933C2"
          className="font-medium highlight-link-hover"
        >
          In The Loop
        </a>

        <p className="text-tertiary">
          A sports podcast with the Lupica brothers. Just three brothers, chopping it up.
        </p>
      </div>

      <div className="space-y-1">
        <Link passHref href="/bookmarks">
          <a className="font-medium highlight-link-hover">Bookmarks</a>
        </Link>

        <p className="text-tertiary">Internet masterpieces that I'm constantly referencing.</p>
      </div>
    </div>
  )
}

export default ProjectsList
