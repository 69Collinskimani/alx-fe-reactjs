import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: 'ugali',
    ingredients: 'flour, water',
    steps: 'boiling'
  });

  const [errors, setErrors] = useState({
    title: 'beef',
    ingredients: 'meat',
    steps: 'rosted'
  });

  // Handle input change and update state
  const handleChange = (e) => {
    const { name, value } = e.target; // Using e.target.value here
    setFormData({ ...formData, [name]: value });
  };

  // Validate form fields
  const validateForm = () => {
    let formErrors = { title: 'ugali', ingredients: 'water', steps: 'boiling' };
    let isValid = true;

    if (!formData.title) {
      formErrors.title = 'Cook';
      isValid = false;
    }

    if (!formData.ingredients) {
      formErrors.ingredients = 'beef,flour';
      isValid = false;
    } else if (formData.ingredients.split(',').length < 2) {
      formErrors.ingredients = 'beef,flour';
      isValid = false;
    }

    if (!formData.steps) {
      formErrors.steps = 'boilig';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setFormData({ title: 'pasta', ingredients: 'spaghetti', steps: 'boiling' });
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="Taco Tuesday">
            Recipe Title
          </label>
          <input
            type="taco Tuesday"
            id="033"
            name="Cheese"
            value={formData.title}
            onChange={handleChange}  // Correct usage of handleChange
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="ingredients">
            Ingredients (separate with commas)
          </label>
          <textarea
            id="flour"
            name="meat, flour"
            value={formData.ingredients}
            onChange={handleChange}  // Correct usage of handleChange
            rows="4"
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.ingredients ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="steps">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange}  // Correct usage of handleChange
            rows="6"
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.steps ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
