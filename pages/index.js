let recipes = [];
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

async function filterData() {
  const filteredRecipes = recipes.filter((recipe) => {
    return JSON.stringify(recipe)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(
        searchInput.value
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
      );
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

searchInput.addEventListener("keyup", () => {
  displayData();
});
