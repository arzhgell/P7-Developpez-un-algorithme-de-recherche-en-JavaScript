function recipesFactory(data) {
  function getRecipeCard() {
    console.log(data.ingredients);
    const html = `<div class="w-full md:w-[30%] bg-white rounded-xl shadow-lg">
          <img src="assets/images/illustrations/Recette${
            data.id
          }.jpg" alt="" class="w-full aspect-[3/2] object-cover rounded-t-xl"/>
        <div class="px-6 py-8">
          <p class="font-bold font-anton text-lg ">${data.name}</p>
          <p class="text-grey uppercase mt-7 mb-4">Recette</p>
          <p class="text-ellipsis max-h-[96px] overflow-hidden">${
            data.description
          }</p>
          <p class="text-grey uppercase mt-7 mb-4">Ingrédients</p>
          <div class="flex flex-wrap justify-between">
            ${data.ingredients
              .map((ingredient) => {
                return `<div class="w-5/12 mb-4">
                <p>${ingredient.ingredient}</p>
                <p class="text-grey">
                  ${ingredient.quantity ?? ""}
                  ${ingredient.unit ?? ""}
                </p>
              </div>`;
              })
              .join("")}
          </div>
        </div>
      </div>`;

    return html;
  }

  return { getRecipeCard };
}
