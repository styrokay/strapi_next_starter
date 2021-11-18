import React, { useState } from "react";

import { Col, Input, InputGroup, InputGroupAddon, Row } from "reactstrap";
import RestaurantListBaked from "../../components/RestaurantListBaked";

const baked = () => {
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
          <RestaurantListBaked search={query} />
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

export default baked;
