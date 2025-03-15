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
  {
    id: '3',
    title: 'Do Spectacles Mean We No Longer Have to Point at the Moon?',
    slug: 'do-spectacles-mean-we-no-longer-have-to-point-at-the-moon-b8a3afa79d40',
    published_at: '2016-12-14T00:00:00.000Z',
    excerpt: 'When Snapchat and psychology collide',
    medium_url: 'https://jman4190.medium.com/do-spectacles-mean-we-no-longer-have-to-point-at-the-moon-b8a3afa79d40'
  },
  {
    id: '4',
    title: 'Stories and Experiences Are Like Peanut Butter and Jelly',
    slug: 'stories-and-experiences-are-like-peanut-butter-and-jelly-c60360ae97f1',
    published_at: '2017-03-04T00:00:00.000Z',
    excerpt: 'Why people will seek out experiences to tell better stories',
    medium_url: 'https://jman4190.medium.com/stories-and-experiences-are-like-peanut-butter-and-jelly-c60360ae97f1'
  },
  {
    id: '5',
    title: 'Snapchat Was Born In The Dark',
    slug: 'snapchat-was-born-in-the-dark-641888287b6f',
    published_at: '2017-03-05T00:00:00.000Z',
    excerpt: 'Why is it that anyone can join a Facebook community, but only 15 friends can join a Snapchat group?',
    medium_url: 'https://jman4190.medium.com/snapchat-was-born-in-the-dark-641888287b6f'
  },
  {
    id: '6',
    title: 'Say Hello to My Twitter Friend',
    slug: 'say-hello-to-my-twitter-friend-9a7df82e8386',
    published_at: '2017-07-30T00:00:00.000Z',
    excerpt: 'Step-by-step guide to launch a Twitter bot that retweets your favorites',
    medium_url: 'https://jman4190.medium.com/say-hello-to-my-twitter-friend-9a7df82e8386'
  },
  {
    id: '7',
    title: 'Favorite Quotes, Emailed Daily',
    slug: 'favorite-quotes-emailed-daily-fd336fa52797',
    published_at: '2018-12-16T00:00:00.000Z',
    excerpt: 'How to build an AWS Lambda Function to email yourself a daily quote',
    medium_url: 'https://jman4190.medium.com/favorite-quotes-emailed-daily-fd336fa52797'
  },
  {
    id: '8',
    title: 'Building a Jar of Memories IoT Button with Python, Twilio & AWS',
    slug: 'building-a-jar-of-memories-iot-button-with-python-twilio-aws-ca90a8159bc3',
    published_at: '2019-02-02T00:00:00.000Z',
    excerpt: 'How to send favorite photo memories via text with a click of a far-away button',
    medium_url: 'https://jman4190.medium.com/building-a-jar-of-memories-iot-button-with-python-twilio-aws-ca90a8159bc3'
  },
  {
    id: '9',
    title: 'Explaining the Inplace Parameter for Beginners',
    slug: 'explaining-the-inplace-parameter-for-beginners-5de7ffa18d2e',
    published_at: '2019-09-19T00:00:00.000Z',
    excerpt: 'What I wish I knew when I was getting started with Pandas Dataframes',
    medium_url: 'https://jman4190.medium.com/explaining-the-inplace-parameter-for-beginners-5de7ffa18d2e'
  },
  {
    id: '10',
    title: 'For Facebook Ads, Creative Is All That Matters',
    slug: 'for-facebook-ads-creative-is-all-that-matters-18136dbbaeee',
    published_at: '2020-01-05T00:00:00.000Z',
    excerpt: 'While ad buying becomes a commodity—creative stands out',
    medium_url: 'https://jman4190.medium.com/for-facebook-ads-creative-is-all-that-matters-18136dbbaeee'
  },
  {
    id: '11',
    title: 'Building an NBA MySQL Database With Python',
    slug: 'building-an-nba-mysql-database-with-python-c653fa15333c',
    published_at: '2020-08-20T00:00:00.000Z',
    excerpt: 'Learning to Code with NBA Data',
    medium_url: 'https://jman4190.medium.com/building-an-nba-mysql-database-with-python-c653fa15333c'
  },
  {
    id: '12',
    title: 'How To Build a GPT-3 Chatbot with Python',
    slug: 'how-to-build-a-gpt-3-chatbot-with-python-7b83e55805e6',
    published_at: '2021-02-28T00:00:00.000Z',
    excerpt: 'We are going to create a messaging Chatbot that is driven by OpenAIs GPT3. This is the closest thing I have seen to a bot having consciousness and we are going to do it in less than 50 lines of code!',
    medium_url: 'https://jman4190.medium.com/how-to-build-a-gpt-3-chatbot-with-python-7b83e55805e6'
  },
  {
    id: '13',
    title: 'How to Build Your Own Spotify Wrapped with Python, Spotipy and Glide Apps',
    slug: 'build-your-own-spotify-wrapped-with-python-spotify-and-glide-apps-493dc7da20b',
    published_at: '2021-05-01T00:00:00.000Z',
    excerpt: 'How to create your own Spotify Wrapped with APIs',
    medium_url: 'https://jman4190.medium.com/build-your-own-spotify-wrapped-with-python-spotify-and-glide-apps-493dc7da20b'
  },
  {
    id: '14',
    title: 'How To Build a GPT-3 Web App with Python',
    slug: 'how-to-build-a-gpt-3-web-app-with-python-64893432cea8',
    published_at: '2021-06-01T00:00:00.000Z',
    excerpt: 'Become unstoppable at Codenames with the help of OpenAI’s GPT-3',
    medium_url: 'https://jman4190.medium.com/how-to-build-a-gpt-3-web-app-with-python-64893432cea8'
  },
  {
    id: '15',
    title: 'How To: Accessing Live NBA Play-By-Play Data',
    slug: 'how-to-accessing-live-nba-play-by-play-data-f24e02b0a976',
    published_at: '2021-09-04T00:00:00.000Z',
    excerpt: 'Translating Owen Phillips Code from R to Python',
    medium_url: 'https://jman4190.medium.com/how-to-accessing-live-nba-play-by-play-data-f24e02b0a976'
  },
  {
    id: '16',
    title: 'How To Buy a Degenerate Ape NFT on Solanart',
    slug: 'how-to-buy-a-degen-ape-academy-nfts-on-solanart-9168dc9aa151',
    published_at: '2021-09-05T00:00:00.000Z',
    excerpt: 'A Step-by-Step guide to getting involved in Solana NFTs',
    medium_url: 'https://jman4190.medium.com/how-to-buy-a-degen-ape-academy-nfts-on-solanart-9168dc9aa151'
  },
  {
    id: '17',
    title: 'The Beginners Guide to Buying & Earning $RAIDER',
    slug: 'the-beginners-guide-to-buying-earning-raider-cfa2cb0a995b',
    published_at: '2021-11-15T00:00:00.000Z',
    excerpt: 'A step-by-step guide to buy and provide $RAIDER liquidity on Sushiswap',
    medium_url: 'https://jman4190.medium.com/the-beginners-guide-to-buying-earning-raider-cfa2cb0a995b'
  },
  {
    id: '18',
    title: 'How To Build an AWS Lambda Function to Email Yourself a Daily Quote',
    slug: 'how-to-build-an-aws-lambda-function-to-send-a-daily-email-1bdc68bec99b',
    published_at: '2022-03-24T00:00:00.000Z',
    excerpt: 'Learn how to connect to Google Sheets and Gmail with python to send yourself a daily email with your favorite quotes',
    medium_url: 'https://jman4190.medium.com/how-to-build-an-aws-lambda-function-to-send-a-daily-email-1bdc68bec99b'
  },
  {
    id: '19',
    title: 'How to Generate SQL Queries From Text with GPT3',
    slug: 'how-to-generate-sql-queries-from-text-with-gpt3-69ef7c44f47a',
    published_at: '2022-07-14T00:00:00.000Z',
    excerpt: 'Step-by-step guide to deploy a local web app using OpenAI’s GPT3 API and NBA Data',
    medium_url: 'https://jman4190.medium.com/how-to-generate-sql-queries-from-text-with-gpt3-69ef7c44f47a'
  },
  {
    id: '20',
    title: 'How to Use Python with the ESPN Fantasy API',
    slug: 'how-to-use-python-with-the-espn-fantasy-draft-api-ecde38621b1b',
    published_at: '2022-09-25T00:00:00.000Z',
    excerpt: 'A step-by-step guide to build an ESPN fantasy football draft tool with python, pandas and google sheets',
    medium_url: 'https://jman4190.medium.com/how-to-use-python-with-the-espn-fantasy-draft-api-ecde38621b1b'
  },
  {
    id: '21',
    title: 'Analyzing Your Fantasy Football Season with Python',
    slug: 'analyzing-your-fantasy-football-season-with-python-8c228262eae9',
    published_at: '2023-01-11T00:00:00.000Z',
    excerpt: 'A step-by-step tutorial on how to measure the difference between ESPN projected points and actual points scored each week in your league',
    medium_url: 'https://jman4190.medium.com/analyzing-your-fantasy-football-season-with-python-8c228262eae9'
  },
  {
    id: '22',
    title: 'How to Build a Discord Chat Bot with GPT3, Python and Replit',
    slug: 'how-to-build-a-discord-gpt3-chat-bot-with-openai-and-python-14177cd926f0',
    published_at: '2023-01-19T00:00:00.000Z',
    excerpt: 'Step-by-step tutorial for how to create a Discord Chat Bot powered by OpenAI’s GPT3',
    medium_url: 'https://jman4190.medium.com/how-to-build-a-discord-gpt3-chat-bot-with-openai-and-python-14177cd926f0'
  },
  {
    id: '23',
    title: 'How to Build a Twitter Chatbot With GPT3 and Replit',
    slug: 'how-to-build-a-twitter-chatbot-with-gpt3-and-replit-781a7c5af2a',
    published_at: '2023-02-08T00:00:00.000Z',
    excerpt: 'Rebuilding SmarterChild on Twitter with Python, GPT3 and Replit',
    medium_url: 'https://jman4190.medium.com/how-to-build-a-twitter-chatbot-with-gpt3-and-replit-781a7c5af2a'
  },
  {
    id: '24',
    title: 'Building a NBA Connections Web App with Curosr, V0, Claude & ChatGPT',
    slug: 'building-a-nba-connections-web-app-64a76a3faa35',
    published_at: '2024-11-24T00:00:00.000Z',
    excerpt: 'Ever find yourself playing the NYT Connections game and thinking “I could build this, but for [insert passion here]”? That’s exactly what happened to me with NBA Connections',
    medium_url: 'https://jman4190.medium.com/building-a-nba-connections-web-app-64a76a3faa35'
  },
  // Add more posts as needed
]; 