import React from "react";
import { useNavigate, useParams } from "react-router";
import { recipes } from "../data/recipes";

export default function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return navigate("not-found");
  }
  return (
    <div>
      <h2>{recipe.title}</h2>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ing, i) => (
          <li key={"ingredient" + i}>{ing}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>

      <button onClick={() => navigate(-1)}>View All Recipes</button>
    </div>
  );
}
