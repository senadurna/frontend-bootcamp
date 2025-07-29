import React from "react";
import { Button, Card } from "react-bootstrap";

const ProductItem = ({ product, onBuy, onSell, count, canBuy }) => {
  const { name, price, image } = product;

  return (
    <Card className="m-2 text-center shadow-sm border" style={{ width: "200px", backgroundColor: "#fff" }}>
      <Card.Img variant="top" src={image} alt={name} style={{ padding: "12px", height: "120px", objectFit: "contain" }} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title className="fs-6">{name}</Card.Title>
        <Card.Text className="text-muted mb-2">${price.toLocaleString()}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <Button
            variant="outline-danger"
            size="sm"
            disabled={count === 0}
            onClick={() => onSell(product)}
            className="w-25"
          >
            Sell
          </Button>
          <span className="fw-bold">{count}</span>
          <Button
            variant="outline-success"
            size="sm"
            disabled={!canBuy}
            onClick={() => onBuy(product)}
            className="w-25"
          >
            Buy
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
