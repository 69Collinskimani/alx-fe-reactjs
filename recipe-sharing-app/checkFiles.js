const fs = require('fs');
const path = require('path');

const filesToCheck = [
  path.join(__dirname, 'src', 'components', 'RecipeList.js'),
  path.join(__dirname, 'src', 'components', 'AddRecipeForm.js'),
];

filesToCheck.forEach((file) => {
  if (fs.existsSync(file)) {
    console.log(`${file} exists.`);
  } else {
    console.log(`${file} does not exist.`);
  }
});
