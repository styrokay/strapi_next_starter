/* components/RestaurantList/index.js */
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import withApollo from "../../lib/withApollo";
import Link from "next/link";
import Image from "next/image";

import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

const QUERY = gql`
  {
    restaurants {
      Title
      Description
      Image {
        url
        width
        height
      }
    }
  }
`;

function RestaurantList(props) {
  const { loading, error, data } = useQuery(QUERY);

  if (error) return "Error loading restaurants";
  //if restaurants are returned from the GraphQL query, run the filter query
  //and set equal to variable restaurantSearch
  if (loading) return <h1>Fetching</h1>;
  if (data.restaurants && data.restaurants.length) {
    //searchQuery
    const searchQuery = data.restaurants.filter((query) =>
      query.Title.toLowerCase().includes(props.search)
    );
    if (searchQuery.length != 0) {
      return (
        <Row>
          {searchQuery.map((res, index) => (
            <Col xs="6" sm="4" key={index}>
              {console.log(res)}
              <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
                <div
                  style={{
                    height: "300px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    quality={50}
                    objectFit="cover"
                    height={res.Image[0].height}
                    width={res.Image[0].width}
                    src={process.env.NEXT_PUBLIC_API_URL + res.Image[0].url}
                  />
                </div>
                <CardBody>
                  <CardTitle>{res.Title}</CardTitle>
                  <CardText>{res.Description}</CardText>
                </CardBody>
                <div className="card-footer">
                  <Link
                    as={`/restaurants/${res.id}`}
                    href={`/restaurants?id=${res.id}`}
                  >
                    <a className="btn btn-primary">View</a>
                  </Link>
                </div>
              </Card>
            </Col>
          ))}

          <style jsx global>
            {`
              a {
                color: white;
              }
              a:link {
                text-decoration: none;
                color: white;
              }
              a:hover {
                color: white;
              }
              .card-columns {
                column-count: 3;
              }
            `}
          </style>
        </Row>
      );
    } else {
      return <h1>No Restaurants Found</h1>;
    }
  }
  return <h5>Add Restaurants</h5>;
}
export default withApollo(RestaurantList);
