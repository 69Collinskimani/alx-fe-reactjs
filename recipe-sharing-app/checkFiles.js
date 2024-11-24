const fs = require('fs');

const filesToCheck = [
  'C:/Users/69Collinskimani/recipe-sharing-app/src/components/RecipeList.js',
  'C:/Users/69Collinskimani/recipe-sharing-app/src/components/AddRecipeForm.js',
];


filesToCheck.forEach((file) => {
  if (fs.existsSync(file)) {
    console.log(`${file} exists.`);
  } else {
    console.log(`${file} does not exist.`);
  }
});
