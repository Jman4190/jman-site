import { getPosts, getPost } from '~/graphql/resolvers/queries/writing'
import { getEpisodes } from '~/graphql/resolvers/queries/podcast'
import { getRepos } from '~/graphql/resolvers/queries/repos'
import { isMe } from '~/graphql/resolvers/queries/isMe'
import { getAMAQuestions } from '~/graphql/resolvers/queries/ama'

export default {
  episodes: getEpisodes,
  posts: getPosts,
  post: getPost,
  repos: getRepos,
  isMe: isMe,
  amaQuestions: getAMAQuestions,
}
