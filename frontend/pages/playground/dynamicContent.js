import React from "react";
import client from "../../lib/ApolloClient";
import { GET_ALL_DYNAMICS } from "../../graphql/queries";
import Card from "../../components/Card";
import { Row, Col } from "reactstrap";
const dynamicContent = ({ data }) => {
  return (
    <div>
      <h1>dynamic content goes here</h1>
      <div>
        <Row>
          {data.map((e, i) => {
            return (
              <Col key={i} xs="6" sm="4">
                <Card content={e} />{" "}
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default dynamicContent;

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_ALL_DYNAMICS,
  });

  return {
    props: {
      data: data.dynamics,
    },
  };
}
