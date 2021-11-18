import React, { useState } from "react";

import { Col, Input, InputGroup, InputGroupAddon, Row } from "reactstrap";
import RestaurantListDynamic from "../../components/RestaurantListDynamic";
import withApollo from "../../lib/withApollo";
import { getDataFromTree } from "@apollo/react-ssr";
const dynamic = () => {
  const [query, updateQuery] = useState("");
  return (
    <div className="container-fluid">
      <Row>
        <Col>
          <div className="search">
            <InputGroup>
              {/*     <InputGroupAddon addonType="append"> Search </InputGroupAddon> */}
              <Input
                onChange={(e) =>
                  updateQuery(e.target.value.toLocaleLowerCase())
                }
                value={query}
              />
            </InputGroup>
          </div>
          <RestaurantListDynamic search={query} />
        </Col>
      </Row>
      <style jsx>
        {`
          .search {
            margin: 20px;
            width: 500px;
          }
        `}
      </style>
    </div>
  );
};

export default withApollo(dynamic, { getDataFromTree });
