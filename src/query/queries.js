import {gql} from "apollo-boost"

export const BOOKS = gql`
  query {
    books {
      id
      name
    }
  }
`;

export const AUTHORS = gql`
  query {
    authors {
      id
      name
    }
  }
`;

export const BOOK = gql`
  query book($id: ID!){
    book(id: $id) {
      id
      name
      genre
      author {
        name
        books {
          id
          name
        }
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addBook($name: String!, $genre: String!, $authorId: String!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
      genre
    }
  }
`