import { gql } from 'apollo-boost'

export const GET_SONGS = gql`
  query getSong {
    songs(order_by: { created_at: desc }) {
      artist
      duration
      id
      thumbnail
      title
      url
    }
  }
`
