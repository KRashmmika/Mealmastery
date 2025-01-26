// Sample Recipe Data
const recipes = [
    { name: "Spaghetti Carbonara", ingredients: "Spaghetti, Eggs, Pancetta, Cheese", instructions: "Boil pasta, cook pancetta, mix with eggs and cheese." },
    { name: "Vegan Tacos", ingredients: "Tortillas, Veggies, Salsa, Guacamole", instructions: "Prepare veggies, assemble tacos with salsa and guacamole." },
];

// Search Recipes Function
function searchRecipes() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const results = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchQuery));
    displayRecipes(results);
}

// Display Recipes on Home Page
function displayRecipes(recipes) {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <img src="https://via.placeholder.com/300" alt="${recipe.name}">
            <h3>${recipe.name}</h3>
            <p>${recipe.ingredients}</p>
            <a href="#">View Recipe</a>
        `;
        recipeList.appendChild(recipeCard);
    });
}

// Handle Recipe Form Submission
document.getElementById('add-recipe-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('recipe-name').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;
    const category = document.getElementById('category').value;
    const image = document.getElementById('recipe-image').files[0];

    const newRecipe = {
        name,
        ingredients,
        instructions,
        category,
        image: image ? URL.createObjectURL(image) : 'https://via.placeholder.com/300'
    };

    recipes.push(newRecipe);
    alert('Recipe added successfully!');
});
