let recipes = [];
let ustensils = [];
let appliances = [];
let ingredients = [];

let searchInput = document.getElementById("searchbox");

async function loadJSON(url) {
  const res = await fetch(url);
  return res.json();
}

async function getRecipes() {
  let rep = [];
  await loadJSON("assets/data/recipes.json").then((response) => {
    rep = response;
  });
  recipes = rep;
}

function cleanSearch(string) {
  return string
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

async function filterData() {
  const filteredRecipes = [];

  for (let i = 0; i < recipes.length; i++) {
    if (
      cleanSearch(JSON.stringify(recipes[i])).includes(
        cleanSearch(searchInput.value)
      )
    ) {
      filteredRecipes.push(recipes[i]);
    }
  }

  ingredients = new Set(
    filteredRecipes
      .map((recipe) => {
        return recipe.ingredients.map((ingredient) => {
          return ingredient.ingredient;
        });
      })
      .flat()
  );

  ustensils = new Set(
    filteredRecipes
      .map((recipe) => {
        return recipe.ustensils;
      })
      .flat()
  );

  appliances = new Set(
    filteredRecipes.map((recipe) => {
      return recipe.appliance;
    })
  );

  return filteredRecipes;
}

async function displayData() {
  let html = "";
  console.time();
  const filteredRecipes = await filterData();
  displaySelects();

  const recipesCount = document.getElementById("count");
  recipesCount.innerHTML = filteredRecipes.length;

  filteredRecipes.forEach((recipe) => {
    const recipeModel = recipesFactory(recipe);
    const recipeCard = recipeModel.getRecipeCard();

    html += recipeCard;
  });

  const recipesSection = document.querySelector(".dishes-container");

  recipesSection.innerHTML = html;
  console.timeEnd();
}

function displaySelects() {
  const ingredientsSelect = selectFactory().getSelect(
    "Ingrédient",
    ingredients
  );
  const appliancesSelect = selectFactory().getSelect("Appareils", appliances);
  const ustensilsSelect = selectFactory().getSelect("Ustensiles", ustensils);

  const selectsSection = document.getElementById("selects");
  selectsSection.innerHTML =
    ingredientsSelect + appliancesSelect + ustensilsSelect;
}

async function init() {
  await getRecipes();
  displayData();
}

init();

searchInput.addEventListener("keyup", () => {
  displayData();
});
