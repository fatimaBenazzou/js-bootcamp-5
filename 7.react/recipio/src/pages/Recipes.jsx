import React from "react";
import { recipes } from "../data/recipes";
import { useNavigate } from "react-router";

export default function Recipes() {
  const navigate = useNavigate();
  return (
    <section>
      <h2>Recipes List</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} onClick={() => navigate(recipe.id)}>
            <h3>{recipe.title}</h3>
            <p>{recipe.time}</p>
            <p>{recipe.difficulty}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
