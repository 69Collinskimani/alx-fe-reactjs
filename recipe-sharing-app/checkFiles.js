const fs = require('fs');

const filesToCheck = [
  './path/to/RecipeList.js',
  './path/to/AddRecipeForm.js',
];

filesToCheck.forEach((file) => {
  if (fs.existsSync(file)) {
    console.log(`${file} exists.`);
  } else {
    console.log(`${file} does not exist.`);
  }
});
