import { login, logout } from '~/graphql/resolvers/mutations/auth'
import { requiresMe } from '~/graphql/helpers/requiresMe'
import {
  addAMAQuestion,
  editAMAQuestion,
  deleteAMAQuestion,
  addAMAReaction,
} from '~/graphql/resolvers/mutations/ama'

export default {
  login,
  logout,
  addAMAQuestion,
  editAMAQuestion: requiresMe(editAMAQuestion),
  deleteAMAQuestion: requiresMe(deleteAMAQuestion),
  addAMAReaction,
}
