import gql from "graphql-tag";

export const GET_ALL_RESTAURANTS = gql`
  query Query {
    restaurants {
      Title
      Description
      Image {
        url
        height
        width
      }
    }
  }
`;
