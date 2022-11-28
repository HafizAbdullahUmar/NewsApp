import React from "react";
import { Button, Card } from "react-bootstrap";

const NewsItem =({ title, content, imageUrl, newsUrl, date }) => {
    
    return (
      <Card style={{ width: "18rem" }} className="pt-4 position-relative">
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
          <Button className="btn-sm mb-4" variant="dark">
            <a target="_blank" href={newsUrl} rel="noreferrer">
              Read more
            </a>
          </Button>
          <small className="text-muted d-block position-absolute bottom-0 mb-3">
            {new Date(date).toGMTString()}
          </small>
        </Card.Body>
      </Card>
    );
}
export default NewsItem