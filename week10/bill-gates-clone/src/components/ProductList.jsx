import React from "react";
import ProductItem from "./ProductItem";
import { Container, Row, Col } from "react-bootstrap";

const ProductList = ({ products, onBuy, onSell, cart, money }) => {
  return (
    <Container className="my-4">
      <Row>
        {products.map((product) => {
          const count = cart[product.id] || 0;
          const canBuy = money >= product.price;

          return (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductItem
                product={product}
                count={count}
                onBuy={onBuy}
                onSell={onSell}
                canBuy={canBuy}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProductList;
