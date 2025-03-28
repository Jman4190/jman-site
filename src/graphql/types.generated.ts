// eslint-disable
// ⚠️ DO NOT EDIT ⚠️
// This file is automatically generated, run yarn run generate to update

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Ama = {
  __typename?: 'AMA'
  id: Scalars['String']
  question: Scalars['String']
  status?: Maybe<AmaStatus>
  answer?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['String']>
  reactions?: Maybe<Scalars['Int']>
}

export enum AmaStatus {
  Pending = 'PENDING',
  Answered = 'ANSWERED',
}

export type Bookmark = {
  __typename?: 'Bookmark'
  id: Scalars['ID']
  url: Scalars['String']
  author?: Maybe<Scalars['String']>
  creator?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['String']>
  site_name?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  host?: Maybe<Scalars['String']>
  reactions?: Maybe<Scalars['Int']>
  notes?: Maybe<Scalars['String']>
  category?: Maybe<Scalars['String']>
  twitterHandle?: Maybe<Scalars['String']>
}

export type Episode = {
  __typename?: 'Episode'
  id?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  legacy_id?: Maybe<Scalars['String']>
  long_description?: Maybe<Scalars['String']>
  published_at?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  token?: Maybe<Scalars['String']>
}

export type Mutation = {
  __typename?: 'Mutation'
  login?: Maybe<Scalars['Boolean']>
  logout?: Maybe<Scalars['Boolean']>
  addBookmark?: Maybe<Bookmark>
  editBookmark?: Maybe<Bookmark>
  deleteBookmark?: Maybe<Scalars['Boolean']>
  addBookmarkReaction?: Maybe<Bookmark>
  addAMAQuestion?: Maybe<Scalars['Boolean']>
  deleteAMAQuestion?: Maybe<Scalars['Boolean']>
  editAMAQuestion?: Maybe<Ama>
  addAMAReaction?: Maybe<Ama>
}

export type MutationLoginArgs = {
  password: Scalars['String']
}

export type MutationAddBookmarkArgs = {
  url: Scalars['String']
  notes?: Maybe<Scalars['String']>
  category?: Maybe<Scalars['String']>
  twitterHandle?: Maybe<Scalars['String']>
}

export type MutationEditBookmarkArgs = {
  id: Scalars['ID']
  title: Scalars['String']
  notes?: Maybe<Scalars['String']>
  category?: Maybe<Scalars['String']>
  twitterHandle?: Maybe<Scalars['String']>
}

export type MutationDeleteBookmarkArgs = {
  id: Scalars['ID']
}

export type MutationAddBookmarkReactionArgs = {
  id: Scalars['ID']
}

export type MutationAddAmaQuestionArgs = {
  question: Scalars['String']
}

export type MutationDeleteAmaQuestionArgs = {
  id: Scalars['ID']
}

export type MutationEditAmaQuestionArgs = {
  id: Scalars['ID']
  answer?: Maybe<Scalars['String']>
  question?: Maybe<Scalars['String']>
  status?: Maybe<AmaStatus>
}

export type MutationAddAmaReactionArgs = {
  id: Scalars['ID']
}

export type Post = {
  __typename?: 'Post'
  canonical_url?: Maybe<Scalars['String']>
  codeinjection_foot?: Maybe<Scalars['String']>
  codeinjection_head?: Maybe<Scalars['String']>
  comment_id?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['String']>
  custom_excerpt?: Maybe<Scalars['String']>
  excerpt?: Maybe<Scalars['String']>
  feature_image?: Maybe<Scalars['String']>
  featured?: Maybe<Scalars['Boolean']>
  html?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  medium_url?: Maybe<Scalars['String']>
  meta_description?: Maybe<Scalars['String']>
  meta_title?: Maybe<Scalars['String']>
  og_description?: Maybe<Scalars['String']>
  og_image?: Maybe<Scalars['String']>
  og_title?: Maybe<Scalars['String']>
  published_at?: Maybe<Scalars['String']>
  reading_time?: Maybe<Scalars['Int']>
  slug?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  twitter_description?: Maybe<Scalars['String']>
  twitter_image?: Maybe<Scalars['String']>
  twitter_title?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  uuid?: Maybe<Scalars['String']>
  visibility?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  bookmarks: Array<Maybe<Bookmark>>
  episodes: Array<Maybe<Episode>>
  posts: Array<Maybe<Post>>
  post?: Maybe<Post>
  amaQuestions: Array<Maybe<Ama>>
  repos: Array<Maybe<Repo>>
  isMe?: Maybe<Scalars['Boolean']>
}

export type QueryBookmarksArgs = {
  skip?: Maybe<Scalars['Int']>
  category?: Maybe<Scalars['String']>
}

export type QueryPostsArgs = {
  first?: Maybe<Scalars['Int']>
}

export type QueryPostArgs = {
  slug: Scalars['String']
}

export type QueryAmaQuestionsArgs = {
  skip?: Maybe<Scalars['Int']>
  status?: Maybe<AmaStatus>
}

export type Repo = {
  __typename?: 'Repo'
  org?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  stars?: Maybe<Scalars['Int']>
}

export type BookmarkInfoFragment = {
  __typename: 'Bookmark'
  id: string
  title?: Maybe<string>
  url: string
  host?: Maybe<string>
  reactions?: Maybe<number>
  notes?: Maybe<string>
  category?: Maybe<string>
  twitterHandle?: Maybe<string>
}

export type EpisodeInfoFragment = {
  __typename?: 'Episode'
  id?: Maybe<string>
  description?: Maybe<string>
  legacy_id?: Maybe<string>
  long_description?: Maybe<string>
  published_at?: Maybe<string>
  status?: Maybe<string>
  title?: Maybe<string>
  token?: Maybe<string>
}

export type PostInfoFragment = {
  __typename?: 'Post'
  id?: Maybe<string>
  title?: Maybe<string>
  slug?: Maybe<string>
  updated_at?: Maybe<string>
  published_at?: Maybe<string>
  excerpt?: Maybe<string>
  feature_image?: Maybe<string>
  html?: Maybe<string>
  medium_url?: Maybe<string>
}

export type RepoInfoFragment = {
  __typename?: 'Repo'
  org?: Maybe<string>
  name?: Maybe<string>
  description?: Maybe<string>
  stars?: Maybe<number>
}

export type LoginMutationVariables = Exact<{
  password: Scalars['String']
}>

export type LoginMutation = { __typename?: 'Mutation'; login?: Maybe<boolean> }

export type LogoutMutationVariables = Exact<{ [key: string]: never }>

export type LogoutMutation = {
  __typename?: 'Mutation'
  logout?: Maybe<boolean>
}

export type EditBookmarkMutationVariables = Exact<{
  id: Scalars['ID']
  title: Scalars['String']
  notes?: Maybe<Scalars['String']>
  category?: Maybe<Scalars['String']>
  twitterHandle?: Maybe<Scalars['String']>
}>

export type EditBookmarkMutation = {
  __typename?: 'Mutation'
  editBookmark?: Maybe<{ __typename?: 'Bookmark' } & BookmarkInfoFragment>
}

export type DeleteBookmarkMutationVariables = Exact<{
  id: Scalars['ID']
}>

export type DeleteBookmarkMutation = {
  __typename?: 'Mutation'
  deleteBookmark?: Maybe<boolean>
}

export type AddBookmarkMutationVariables = Exact<{
  url: Scalars['String']
  notes?: Maybe<Scalars['String']>
  category?: Maybe<Scalars['String']>
  twitterHandle?: Maybe<Scalars['String']>
}>

export type AddBookmarkMutation = {
  __typename?: 'Mutation'
  addBookmark?: Maybe<{ __typename?: 'Bookmark' } & BookmarkInfoFragment>
}

export type AddBookmarkReactionMutationVariables = Exact<{
  id: Scalars['ID']
}>

export type AddBookmarkReactionMutation = {
  __typename?: 'Mutation'
  addBookmarkReaction?: Maybe<
    { __typename?: 'Bookmark' } & BookmarkInfoFragment
  >
}

export type GetBookmarksQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>
  category?: Maybe<Scalars['String']>
}>

export type GetBookmarksQuery = {
  __typename?: 'Query'
  bookmarks: Array<Maybe<{ __typename?: 'Bookmark' } & BookmarkInfoFragment>>
}

export type GetEpisodesQueryVariables = Exact<{ [key: string]: never }>

export type GetEpisodesQuery = {
  __typename?: 'Query'
  episodes: Array<Maybe<{ __typename?: 'Episode' } & EpisodeInfoFragment>>
}

export type GetHomeQueryVariables = Exact<{ [key: string]: never }>

export type GetHomeQuery = {
  __typename?: 'Query'
  posts: Array<Maybe<{ __typename?: 'Post' } & PostInfoFragment>>
  episodes: Array<Maybe<{ __typename?: 'Episode' } & EpisodeInfoFragment>>
}

export type IsMeQueryVariables = Exact<{ [key: string]: never }>

export type IsMeQuery = { __typename?: 'Query'; isMe?: Maybe<boolean> }

export type GetPostsQueryVariables = Exact<{ [key: string]: never }>

export type GetPostsQuery = {
  __typename?: 'Query'
  posts: Array<Maybe<{ __typename?: 'Post' } & PostInfoFragment>>
}

export type GetPostQueryVariables = Exact<{
  slug: Scalars['String']
  first?: Maybe<Scalars['Int']>
}>

export type GetPostQuery = {
  __typename?: 'Query'
  post?: Maybe<{ __typename?: 'Post' } & PostInfoFragment>
}

export const BookmarkInfoFragmentDoc = gql`
  fragment BookmarkInfo on Bookmark {
    __typename
    id
    title
    url
    host
    reactions
    notes
    category
    twitterHandle
  }
`
export const EpisodeInfoFragmentDoc = gql`
  fragment EpisodeInfo on Episode {
    id
    description
    legacy_id
    long_description
    published_at
    status
    title
    token
  }
`
export const PostInfoFragmentDoc = gql`
  fragment PostInfo on Post {
    id
    title
    slug
    updated_at
    published_at
    excerpt
    feature_image
    html
    medium_url
  }
`
export const RepoInfoFragmentDoc = gql`
  fragment RepoInfo on Repo {
    org
    name
    description
    stars
  }
`
export const LoginDocument = gql`
  mutation login($password: String!) {
    login(password: $password)
  }
`
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  )
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>
export const LogoutDocument = gql`
  mutation logout {
    logout
  }
`
export type LogoutMutationFn = Apollo.MutationFunction<
  LogoutMutation,
  LogoutMutationVariables
>

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LogoutMutation,
    LogoutMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(
    LogoutDocument,
    options
  )
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>
export type LogoutMutationOptions = Apollo.BaseMutationOptions<
  LogoutMutation,
  LogoutMutationVariables
>
export const EditBookmarkDocument = gql`
  mutation editBookmark(
    $id: ID!
    $title: String!
    $notes: String
    $category: String
    $twitterHandle: String
  ) {
    editBookmark(
      id: $id
      title: $title
      notes: $notes
      category: $category
      twitterHandle: $twitterHandle
    ) {
      ...BookmarkInfo
    }
  }
  ${BookmarkInfoFragmentDoc}
`
export type EditBookmarkMutationFn = Apollo.MutationFunction<
  EditBookmarkMutation,
  EditBookmarkMutationVariables
>

/**
 * __useEditBookmarkMutation__
 *
 * To run a mutation, you first call `useEditBookmarkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditBookmarkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editBookmarkMutation, { data, loading, error }] = useEditBookmarkMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      notes: // value for 'notes'
 *      category: // value for 'category'
 *      twitterHandle: // value for 'twitterHandle'
 *   },
 * });
 */
export function useEditBookmarkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EditBookmarkMutation,
    EditBookmarkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    EditBookmarkMutation,
    EditBookmarkMutationVariables
  >(EditBookmarkDocument, options)
}
export type EditBookmarkMutationHookResult = ReturnType<
  typeof useEditBookmarkMutation
>
export type EditBookmarkMutationResult =
  Apollo.MutationResult<EditBookmarkMutation>
export type EditBookmarkMutationOptions = Apollo.BaseMutationOptions<
  EditBookmarkMutation,
  EditBookmarkMutationVariables
>
export const DeleteBookmarkDocument = gql`
  mutation deleteBookmark($id: ID!) {
    deleteBookmark(id: $id)
  }
`
export type DeleteBookmarkMutationFn = Apollo.MutationFunction<
  DeleteBookmarkMutation,
  DeleteBookmarkMutationVariables
>

/**
 * __useDeleteBookmarkMutation__
 *
 * To run a mutation, you first call `useDeleteBookmarkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBookmarkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBookmarkMutation, { data, loading, error }] = useDeleteBookmarkMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBookmarkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteBookmarkMutation,
    DeleteBookmarkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteBookmarkMutation,
    DeleteBookmarkMutationVariables
  >(DeleteBookmarkDocument, options)
}
export type DeleteBookmarkMutationHookResult = ReturnType<
  typeof useDeleteBookmarkMutation
>
export type DeleteBookmarkMutationResult =
  Apollo.MutationResult<DeleteBookmarkMutation>
export type DeleteBookmarkMutationOptions = Apollo.BaseMutationOptions<
  DeleteBookmarkMutation,
  DeleteBookmarkMutationVariables
>
export const AddBookmarkDocument = gql`
  mutation addBookmark(
    $url: String!
    $notes: String
    $category: String
    $twitterHandle: String
  ) {
    addBookmark(
      url: $url
      notes: $notes
      category: $category
      twitterHandle: $twitterHandle
    ) {
      ...BookmarkInfo
    }
  }
  ${BookmarkInfoFragmentDoc}
`
export type AddBookmarkMutationFn = Apollo.MutationFunction<
  AddBookmarkMutation,
  AddBookmarkMutationVariables
>

/**
 * __useAddBookmarkMutation__
 *
 * To run a mutation, you first call `useAddBookmarkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBookmarkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBookmarkMutation, { data, loading, error }] = useAddBookmarkMutation({
 *   variables: {
 *      url: // value for 'url'
 *      notes: // value for 'notes'
 *      category: // value for 'category'
 *      twitterHandle: // value for 'twitterHandle'
 *   },
 * });
 */
export function useAddBookmarkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddBookmarkMutation,
    AddBookmarkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddBookmarkMutation, AddBookmarkMutationVariables>(
    AddBookmarkDocument,
    options
  )
}
export type AddBookmarkMutationHookResult = ReturnType<
  typeof useAddBookmarkMutation
>
export type AddBookmarkMutationResult =
  Apollo.MutationResult<AddBookmarkMutation>
export type AddBookmarkMutationOptions = Apollo.BaseMutationOptions<
  AddBookmarkMutation,
  AddBookmarkMutationVariables
>
export const AddBookmarkReactionDocument = gql`
  mutation addBookmarkReaction($id: ID!) {
    addBookmarkReaction(id: $id) {
      ...BookmarkInfo
    }
  }
  ${BookmarkInfoFragmentDoc}
`
export type AddBookmarkReactionMutationFn = Apollo.MutationFunction<
  AddBookmarkReactionMutation,
  AddBookmarkReactionMutationVariables
>

/**
 * __useAddBookmarkReactionMutation__
 *
 * To run a mutation, you first call `useAddBookmarkReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBookmarkReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBookmarkReactionMutation, { data, loading, error }] = useAddBookmarkReactionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAddBookmarkReactionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddBookmarkReactionMutation,
    AddBookmarkReactionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    AddBookmarkReactionMutation,
    AddBookmarkReactionMutationVariables
  >(AddBookmarkReactionDocument, options)
}
export type AddBookmarkReactionMutationHookResult = ReturnType<
  typeof useAddBookmarkReactionMutation
>
export type AddBookmarkReactionMutationResult =
  Apollo.MutationResult<AddBookmarkReactionMutation>
export type AddBookmarkReactionMutationOptions = Apollo.BaseMutationOptions<
  AddBookmarkReactionMutation,
  AddBookmarkReactionMutationVariables
>
export const GetBookmarksDocument = gql`
  query GetBookmarks($skip: Int, $category: String) {
    bookmarks(skip: $skip, category: $category) {
      ...BookmarkInfo
    }
  }
  ${BookmarkInfoFragmentDoc}
`

/**
 * __useGetBookmarksQuery__
 *
 * To run a query within a React component, call `useGetBookmarksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookmarksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookmarksQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      category: // value for 'category'
 *   },
 * });
 */
export function useGetBookmarksQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetBookmarksQuery,
    GetBookmarksQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetBookmarksQuery, GetBookmarksQueryVariables>(
    GetBookmarksDocument,
    options
  )
}
export function useGetBookmarksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBookmarksQuery,
    GetBookmarksQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetBookmarksQuery, GetBookmarksQueryVariables>(
    GetBookmarksDocument,
    options
  )
}
export type GetBookmarksQueryHookResult = ReturnType<
  typeof useGetBookmarksQuery
>
export type GetBookmarksLazyQueryHookResult = ReturnType<
  typeof useGetBookmarksLazyQuery
>
export type GetBookmarksQueryResult = Apollo.QueryResult<
  GetBookmarksQuery,
  GetBookmarksQueryVariables
>
export const GetEpisodesDocument = gql`
  query GetEpisodes {
    episodes {
      ...EpisodeInfo
    }
  }
  ${EpisodeInfoFragmentDoc}
`

/**
 * __useGetEpisodesQuery__
 *
 * To run a query within a React component, call `useGetEpisodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEpisodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEpisodesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEpisodesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetEpisodesQuery,
    GetEpisodesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetEpisodesQuery, GetEpisodesQueryVariables>(
    GetEpisodesDocument,
    options
  )
}
export function useGetEpisodesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetEpisodesQuery,
    GetEpisodesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetEpisodesQuery, GetEpisodesQueryVariables>(
    GetEpisodesDocument,
    options
  )
}
export type GetEpisodesQueryHookResult = ReturnType<typeof useGetEpisodesQuery>
export type GetEpisodesLazyQueryHookResult = ReturnType<
  typeof useGetEpisodesLazyQuery
>
export type GetEpisodesQueryResult = Apollo.QueryResult<
  GetEpisodesQuery,
  GetEpisodesQueryVariables
>
export const GetHomeDocument = gql`
  query GetHome {
    posts(first: 3) {
      ...PostInfo
    }
    episodes {
      ...EpisodeInfo
    }
  }
  ${PostInfoFragmentDoc}
  ${EpisodeInfoFragmentDoc}
`

/**
 * __useGetHomeQuery__
 *
 * To run a query within a React component, call `useGetHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHomeQuery(
  baseOptions?: Apollo.QueryHookOptions<GetHomeQuery, GetHomeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetHomeQuery, GetHomeQueryVariables>(
    GetHomeDocument,
    options
  )
}
export function useGetHomeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetHomeQuery, GetHomeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetHomeQuery, GetHomeQueryVariables>(
    GetHomeDocument,
    options
  )
}
export type GetHomeQueryHookResult = ReturnType<typeof useGetHomeQuery>
export type GetHomeLazyQueryHookResult = ReturnType<typeof useGetHomeLazyQuery>
export type GetHomeQueryResult = Apollo.QueryResult<
  GetHomeQuery,
  GetHomeQueryVariables
>
export const IsMeDocument = gql`
  query IsMe {
    isMe
  }
`

/**
 * __useIsMeQuery__
 *
 * To run a query within a React component, call `useIsMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useIsMeQuery(
  baseOptions?: Apollo.QueryHookOptions<IsMeQuery, IsMeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<IsMeQuery, IsMeQueryVariables>(IsMeDocument, options)
}
export function useIsMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<IsMeQuery, IsMeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<IsMeQuery, IsMeQueryVariables>(
    IsMeDocument,
    options
  )
}
export type IsMeQueryHookResult = ReturnType<typeof useIsMeQuery>
export type IsMeLazyQueryHookResult = ReturnType<typeof useIsMeLazyQuery>
export type IsMeQueryResult = Apollo.QueryResult<IsMeQuery, IsMeQueryVariables>
export const GetPostsDocument = gql`
  query GetPosts {
    posts {
      ...PostInfo
    }
  }
  ${PostInfoFragmentDoc}
`

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPostsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(
    GetPostsDocument,
    options
  )
}
export function useGetPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPostsQuery,
    GetPostsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(
    GetPostsDocument,
    options
  )
}
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>
export type GetPostsLazyQueryHookResult = ReturnType<
  typeof useGetPostsLazyQuery
>
export type GetPostsQueryResult = Apollo.QueryResult<
  GetPostsQuery,
  GetPostsQueryVariables
>
export const GetPostDocument = gql`
  query GetPost($slug: String!, $first: Int) {
    post(slug: $slug) {
      ...PostInfo
    }
  }
  ${PostInfoFragmentDoc}
`

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetPostQuery(
  baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(
    GetPostDocument,
    options
  )
}
export function useGetPostLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(
    GetPostDocument,
    options
  )
}
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>
export type GetPostQueryResult = Apollo.QueryResult<
  GetPostQuery,
  GetPostQueryVariables
>
