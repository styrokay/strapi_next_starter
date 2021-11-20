import React from "react";
import client from "../../lib/ApolloClient";
import { GET_ALL_STATICS } from "../../graphql/queries";
import Card from "../../components/Card";
import { Row, Col } from "reactstrap";
const staticContent = ({ data, loading }) => {
  return (
    <div>
      <h1>static content goes here</h1>
      {loading === false && data ? (
        <Row>
          {data.map((e, i) => {
            return (
              <Col key={i} xs="6" sm="4">
                <Card content={e} />{" "}
              </Col>
            );
          })}
        </Row>
      ) : (
        "null"
      )}
      {/*       <Row>
        {data.map((e, i) => {
          return (
            <Col key={i} xs="6" sm="4">
              <Card content={e} />{" "}
            </Col>
          );
        })}
      </Row> */}
      {/*  <Card content={data} /> */}
    </div>
  );
};

export default staticContent;

export async function getStaticProps() {
  const { data, loading, errors } = await client.query({
    query: GET_ALL_STATICS,
  });

  return {
    props: {
      data: data.statics,
      loading: loading,
    },
    revalidate: 30,
  };
}
