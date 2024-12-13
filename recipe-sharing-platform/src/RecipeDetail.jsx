import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(selectedRecipe);
      });
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-md mb-4" />
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
      <p className="text-gray-700 text-lg mb-6">{recipe.summary}</p>
      <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc pl-6 mb-6">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-600">{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
      <ol className="list-decimal pl-6">
        {recipe.instructions.map((step, index) => (
          <li key={index} className="text-gray-600 mb-2">{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
