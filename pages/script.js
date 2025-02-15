document.addEventListener("DOMContentLoaded", () => {
  const menuData = [
    {
      category: "Grab & Go",
      items: [
        { name: "Water", price: "$2" },
        { name: "tea", price: "$2.50" },
        { name: "Juice", price: "$2.50" },
        { name: "Energy Drink", price: "$3.75" },
      ],
    },
    {
      category: "Filter",
      items: [
        { name: "Small (12oz)", price: "$3" },
        { name: "Regular (16oz)", price: "$4.25" },
        { name: "Large (20oz)", price: "$4.50" },
        { name: "Party-size (24oz, decaf)", price: "$5.75" },
        { name: "Iced Coffee (16oz)", price: "$4.25" },
      ],
    },
    {
      category: "Espresso",
      items: [
        { name: "Macchiato", price: "$2.25" },
        { name: "Cortado", price: "$2.50" },
        { name: "Mocha", price: "$3" },
        { name: "Sunrise in the Bay Area (decaf)", price: "$10" },
      ],
    },
    {
      category: "Baked Goods",
      items: [
        { name: "Almond Croissant", price: "$2" },
        { name: "Banana Bread", price: "$1.75" },
        { name: "Key Lime Pie", price: "$3" },
        { name: "Blue Velvet Cake", price: "$3.75" },
        { name: "Web Cookie", price: "$2" },
        { name: "Fresh Bug’uette", price: "$0.25" },
      ],
    },
  ];

  const menuContainer = document.querySelector(".menu__cards");
  menuContainer.innerHTML = ""; // Clear any existing content

  menuData.forEach((category) => {
    const card = document.createElement("li");
    card.classList.add("card");

    card.innerHTML = `
      <h3 class="card__title">${category.category}</h3>
      <ul class="card__list">
        ${category.items
          .map(
            (item) => `
          <li class="card__list-item">
            ${item.name} <span class="card__list-divider"></span> ${item.price}
          </li>
        `
          )
          .join("")}
      </ul>
    `;

    menuContainer.appendChild(card);
  });
});

const recipesData = [
  {
    title: "Aeropress Recipe",
    videoUrl: "https://www.youtube.com/embed/j6VlT_jUVPc",
    duration: "~5 min",
  },
  {
    title: "French Press Recipe",
    videoUrl: "https://www.youtube.com/embed/st571DYYTR8",
    duration: "~15 min",
  },
];

const recipesContainer = document.querySelector(".recipes__videos");
recipesContainer.innerHTML = "";
recipesData.forEach((recipe) => {
  const listItem = document.createElement("li");
  const iframe = document.createElement("iframe");
  iframe.src = recipe.videoUrl;
  iframe.title = recipe.title;
  iframe.classList.add("recipes__iframe");
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.allowFullscreen = true;

  const caption = document.createElement("p");
  caption.classList.add("recipes__video-caption");
  caption.innerHTML = `<span>${recipe.title}</span> <span>${recipe.duration}</span>`;

  listItem.appendChild(iframe);
  listItem.appendChild(caption);
  recipesContainer.appendChild(listItem);
});
