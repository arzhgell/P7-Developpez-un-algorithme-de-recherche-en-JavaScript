function recipesFactory(data) {
  function getRecipeCard() {
    const html = `<div class="w-[30%] rounded-xl shadow-lg p-4">
    <img src="assets/images/illustrations/Recette${data.id}.jpg" alt="">
        <p class="font-bold">${data.name}</p>
        <p>Recette</p>
        <p>${data.description}</p>
        <p>Ingrédients</p>
        <div class="flex flex-wrap">
          ${data.ingredients.forEach((ingredient) => {
            `<div class="w-6/12">
              <p>${ingredient.ingredient}</p>
              <p>
                ${ingredient.quantity}
                ${ingredient.unit ?? ""}
              </p>
            </div>`;
          })}
        </div>
      </div>`;

    return html;
  }

  return { getRecipeCard };
}
