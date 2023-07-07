function selectFactory() {
  function getSelect(name, items) {
    items = Array.from(items);

    const select = `<div id="${name}Container" class="bg-white rounded-xl hover:rounded-b-none relative w-4/12 h-fit group">
      <button id="${name}Btn" class="flex items-center justify-between w-full p-4">
        ${name} <i class="fa-solid fa-chevron-down"></i>
      </button>
      <div
        id="${name}Select"
        class="hidden w-full absolute bg-white rounded-b-xl overflow-hidden group-hover:block"
      >
        <div class="p-4">
          <input type="text" class="border-lightGrey border-[1px] h-9 w-full" />
        </div>
        <div id="${name}Options" class="flex flex-col max-h-36 overflow-y-scroll">
          ${items
            .map((item) => {
              return `<p class="hover:bg-yellow p-4 cursor-pointer">${item}</p>`;
            })
            .join("")}
        </div>
      </div>
    </div>`;

    return select;
  }

  return { getSelect };
}
