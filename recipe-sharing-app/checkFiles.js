const fs = require('fs');

const filesToCheck = [
  './src/components/RecipeList.js',
  './src/components/AddRecipeForm.js',
];


filesToCheck.forEach((file) => {
  if (fs.existsSync(file)) {
    console.log(`${file} exists.`);
  } else {
    console.log(`${file} does not exist.`);
  }
});
