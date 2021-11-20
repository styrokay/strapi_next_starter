import { gql } from "@apollo/client";

export const GET_ALL_STATICS = gql`
  query {
    statics {
      title
      description
      image {
        height
        width
        url
      }
    }
  }
`;

export const GET_ALL_DYNAMICS = gql`
  query {
    dynamics {
      title
      description
      image {
        height
        width
        url
      }
    }
  }
`;
