import React from "react";
import { useNavigate } from "react-router";

const products = [
  {
    id: 1,
    name: "Product 1",
  },
  {
    id: 2,
    name: "Product 2",
  },
  {
    id: 3,
    name: "Product 3",
  },
  {
    id: 4,
    name: "Product 4",
  },
];

export default function Products() {
  const navigate = useNavigate();

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id} onClick={() => navigate(`${product.id}`)}>
          <h2>{product.name}</h2>
        </li>
      ))}
    </ul>
  );
}
