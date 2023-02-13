import { gql } from '@apollo/client'

export const GET_BLOGS = gql`
  query myQuery {
    posts {
      author {
        avatar {
          url
        }
        name
      }
      coverPhoto {
        url
      }
      title
      slug
      id
    }
  }
`

export const GET_BLOG = gql`
  query getBlogInfo($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        avatar {
          url
        }
        name
        field
      }
      coverPhoto {
        url
      }
      content {
        html
      }
      title
    }
  }
`

export const GET_AUTHORS = gql`
  query myQuery {
    authors {
      avatar {
        url
      }
      name
      id
      slug
    }
  }
`

export const GET_AUTHOR = gql`
  query getAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      field
      name
      description {
        html
      }
      posts {
        coverPhoto {
          url
          id
        }
        slug
        title
      }
    }
  }
`

export const GET_COMMENTS = gql`
  query getComments($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      text
      id
      name
    }
  }
`
