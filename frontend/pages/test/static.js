import React, { useState } from "react";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import withApollo from "../../lib/withApollo";
// import { getDataFromTree } from '@apollo/react-ssr';

const QUERY = gql`
  {
    bakeds {
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

const baked = () => {
  const { loading, data } = useQuery(QUERY);
  return (
    <div>
      <h1>static example</h1>
      {loading || !data ? "Loading..." : null}
      <div>
        {data ? (
          <div>
            {data.bakeds.map((e, index) => {
              return <h1 key={index}>{e.Title}</h1>;
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default withApollo(baked);
