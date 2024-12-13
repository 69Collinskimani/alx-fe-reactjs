import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch recipe data from data.json
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((item) => item.id === parseInt(id, 10));
        setRecipe(selectedRecipe);
      });
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10">Loading recipe details...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-md mb-4 shadow-md"
        />
        <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-gray-700 mb-6">{recipe.summary}</p>

        <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
        <ul className="list-disc pl-6 mb-6">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">
              {ingredient}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Cooking Instructions:</h2>
        <ol className="list-decimal pl-6">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="text-gray-700 mb-2">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
