import React, { useState } from "react";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import withApollo from "../../lib/withApollo";
// import { getDataFromTree } from '@apollo/react-ssr';

const QUERY = gql`
  {
    restaurants {
      Title
      Description
      Image {
        height
        width
        url
      }
    }
  }
`;

const dynamic = () => {
  const { loading, data } = useQuery(QUERY);
  return (
    <div>
      <h1>dynamic example</h1>
      {loading || !data ? "Loading..." : null}
      <div>
        {data ? (
          <div>
            {data.restaurants.map((e, index) => {
              return <h1 key={index}>{e.Title}</h1>;
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default withApollo(dynamic);
