import React from "react";
import Card from "react-bootstrap/Card";

const MyCard = ({ recipe }) => {
  return (
    <Card border="primary" style={{ width: '100%' }}>
      <Card.Img variant="top" src={ recipe.imageurl }></Card.Img>
      <Card.Body>
        <Card.Title>
          { recipe.name }
        </Card.Title>
        <Card.Text>
          { recipe.description }  
        </Card.Text>       
      </Card.Body>
    </Card>
  );
};
export default MyCard;