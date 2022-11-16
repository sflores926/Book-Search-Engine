import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    createVote(username: $username, email: $email, password: $password) {
      token
      user{
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($input: SavedBookInput) {
    createVote(input: $input) {
      _id
    username
    savedBooks{
      bookId
      authors
      description
      title
      image
      link
    }
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookid: $bookid) {
      _id
      username
      bookCount
      savedBooks {
        bookId
      authors
      description
      title
      image
      link
      }
    }
  }
`;