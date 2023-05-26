let recipes = [];

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

async function filterData() {
  let search_query = document.getElementById("searchbox").value;

  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.name
      .toLowerCase()
      .normalize()
      .includes(search_query.toLowerCase().normalize());
  });

  return filteredRecipes;
}

async function displayData() {
  let html = "";
  console.time();
  const filteredRecipes = await filterData();

  filteredRecipes.forEach((recipe) => {
    const recipeModel = recipesFactory(recipe);
    const recipeCard = recipeModel.getRecipeCard();

    html += recipeCard;
  });

  const recipesSection = document.querySelector(".dishes-container");

  recipesSection.innerHTML = html;
  console.timeEnd();
}

async function init() {
  await getRecipes();
  displayData();
}

init();

let typingTimer;
let typeInterval = 500;
let searchInput = document.getElementById("searchbox");

searchInput.addEventListener("keyup", () => {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(displayData, typeInterval);
});
