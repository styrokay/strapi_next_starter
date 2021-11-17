import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import withApollo from "../lib/withApollo";
import { getDataFromTree } from "@apollo/react-ssr";

const QUERY = gql`
  {
    restaurants {
      Title
    }
  }
`;

const portfolio = () => {
  const { loading, data } = useQuery(QUERY);
  console.log(data);

  if (loading) return <h1>Fetching</h1>;
  if (data)
    return (
      <div>
        {data.restaurants.map((e, i) => {
          return <h1>{e.Title}</h1>;
        })}
      </div>
    );

  return <h5>Add Restaurants</h5>;
};

export default withApollo(portfolio, { getDataFromTree });
