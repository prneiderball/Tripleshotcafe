document.addEventListener("DOMContentLoaded", () => {
  const menuData = [
    {
      category: "Filter",
      items: [
        { name: "Small (12oz)", price: "$3" },
        { name: "Regular (16oz)", price: "$4.25" },
        { name: "Large (20oz)", price: "$4.50" },
        { name: "Party-size (24oz, decaf)", price: "$5.75" },
        { name: "Iced Coffee (16oz)", price: "$4.25" }
      ]
    },
    {
      category: "Espresso",
      items: [
        { name: "Macchiato", price: "$2.25" },
        { name: "Cortado", price: "$2.50" },
        { name: "Mocha", price: "$3" },
        { name: "Sunrise in the Bay Area (decaf)", price: "$10" }
      ]
    },
    {
      category: "Baked Goods",
      items: [
        { name: "Almond Croissant", price: "$2" },
        { name: "Banana Bread", price: "$1.75" },
        { name: "Key Lime Pie", price: "$3" },
        { name: "Blue Velvet Cake", price: "$3.75" },
        { name: "Web Cookie", price: "$2" },
        { name: "Fresh Bug’uette", price: "$0.25" }
      ]
    }
  ];

  const menuContainer = document.querySelector(".menu__cards");
  menuContainer.innerHTML = ""; // Clear any existing static content

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
