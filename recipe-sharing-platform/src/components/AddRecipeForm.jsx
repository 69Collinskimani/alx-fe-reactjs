import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required.';
    }
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required.';
    } else if (formData.ingredients.split(',').length < 2) {
      newErrors.ingredients =
        'Please provide at least two ingredients, separated by commas.';
    }
    if (!formData.steps.trim()) {
      newErrors.steps = 'Preparation steps are required.';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If no errors, process the form
    setErrors({});
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
        {Object.keys(errors).length > 0 && (
          <div className="mb-4">
            {Object.values(errors).map((error, index) => (
              <p key={index} className="text-red-500 text-sm text-center">
                {error}
              </p>
            ))}
          </div>
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
            onChange={handleChange}
            className={`w-full border ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            } p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
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
            onChange={handleChange}
            className={`w-full border ${
              errors.ingredients ? 'border-red-500' : 'border-gray-300'
            } p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
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
            onChange={handleChange}
            className={`w-full border ${
              errors.steps ? 'border-red-500' : 'border-gray-300'
            } p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
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
