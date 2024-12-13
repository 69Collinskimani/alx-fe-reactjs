import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target; // e.target.value is used here
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.ingredients || !formData.steps) {
      setError('All fields are required.');
      return;
    }

    if (formData.ingredients.split(',').length < 2) {
      setError('Please provide at least two ingredients, separated by commas.');
      return;
    }

    setError('');
    console.log('Form submitted:', formData);
    setFormData({ title: '', ingredients: '', steps: '' });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Add a New Recipe</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-medium mb-2"
          >
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange} // handleChange called here
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="ingredients"
            className="block text-gray-700 font-medium mb-2"
          >
            Ingredients (separate with commas)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            rows="3"
            value={formData.ingredients}
            onChange={handleChange} // handleChange called here
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="steps"
            className="block text-gray-700 font-medium mb-2"
          >
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            rows="5"
            value={formData.steps}
            onChange={handleChange} // handleChange called here
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
