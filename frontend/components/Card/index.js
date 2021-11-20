/* components/RestaurantList/index.js */
import { useQuery } from "@apollo/react-hooks";

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

function CardIndex(props) {
  const res = props.content;

  return (
    <div>
      <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
        <div
          style={{
            height: "300px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {res.image[0] != undefined ? (
            <Image
              quality={50}
              objectFit="cover"
              height={res.image[0].height}
              width={res.image[0].width}
              src={res.image[0].url}
            />
          ) : (
            <h5>no image available</h5>
          )}
        </div>
        <CardBody>
          <CardTitle>{res.title}</CardTitle>
          <CardText>{res.description}</CardText>
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
    </div>
  );
}

export default CardIndex;
