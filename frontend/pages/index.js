import React, { useState } from "react";

import { Col, Input, InputGroup, InputGroupAddon, Row } from "reactstrap";
/* import RestaurantList from "../components/RestaurantListStatic"; */

function Home() {
  const [query, updateQuery] = useState("");
  return (
    <div className="container-fluid">
      <h1>index, just for now... | Whohoo.</h1>
      <h2>your backend is: {process.env.BACKEND_URL}</h2>
    </div>
  );
}
export default Home;
