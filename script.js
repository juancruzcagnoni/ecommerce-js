let cartButton = document.getElementById("cart");
let statusCart = document.getElementById("status");
let filter = document.getElementById("filter");
let plantsCards = document.getElementById("plantsCards");
let modalCart = document.getElementById("modalCart");

// Plants array.
let plants = [
  {
    id: 1,
    name: "Birdnest Japanese",
    image: "img/birdnest-japanese.jpg",
    shortDesc: "Air purifying",
    desc: "Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices. Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac egestas elementum ut in ornare sit malesuada.",
    price: 84,
    delay: 1500,
  },
  {
    id: 2,
    name: "Hoya Obovatum",
    image: "img/hoya-obovatum.jpg",
    shortDesc: "Indoor plants",
    desc: "Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices. Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac egestas elementum ut in ornare sit malesuada.",
    price: 58,
    delay: 1600,
  },
  {
    id: 3,
    name: "Monstera Deliciosa",
    image: "img/monstera-deliciosa.jpg",
    shortDesc: "Air purifying",
    desc: "Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices. Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac egestas elementum ut in ornare sit malesuada.",
    price: 53,
    delay: 1700,
  },
  {
    id: 4,
    name: "Zz Plants",
    image: "img/zz-plants.jpg",
    shortDesc: "Low maintenance",
    desc: "Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices. Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac egestas elementum ut in ornare sit malesuada.",
    price: 90,
    delay: 1800,
  },
  {
    id: 5,
    name: "Sansevieira Golden",
    image: "img/sansevieria-golden.jpg",
    shortDesc: "Ceramic pots",
    desc: "Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices. Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac egestas elementum ut in ornare sit malesuada.",
    price: 82,
    delay: 1900,
  },
  {
    id: 6,
    name: "Pilea Peperomioides",
    image: "img/pilea-peperomioides.jpg",
    shortDesc: "Low maintenance",
    desc: "Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices. Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac egestas elementum ut in ornare sit malesuada.",
    price: 64,
    delay: 2000,
  },
  {
    id: 7,
    name: "Pachira Braid",
    image: "img/pachira-braid.jpg",
    shortDesc: "Ceramic pots",
    desc: "Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices. Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac egestas elementum ut in ornare sit malesuada.",
    price: 74,
    delay: 2100,
  },
  {
    id: 8,
    name: "Sansevieria Laurentii",
    image: "img/sansevieria-laurentii.jpg",
    shortDesc: "Indoor plants",
    desc: "Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices. Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac egestas elementum ut in ornare sit malesuada.",
    price: 97,
    delay: 2200,
  },
];

// Categories array.
let categories = [
  "Low maintenance",
  "Indoor plants",
  "Air purifying",
  "Ceramic pots",
];

// Cart array.
let cart = [];

// Create plants catalog.
plants.forEach((plant) => {
  let card = document.createElement("div");
  card.classList.add("card-plant", "p-2", "col-6", "col-md-3");
  card.id = plant.shortDesc;
  card.setAttribute("data-aos", "fade-up");
  card.setAttribute("data-aos-duration", plant.delay);

  // Card structure.
  card.innerHTML = `
    <div class="img-card-container">
      <img class="img-fluid img-card" src="${plant.image}">
    </div>  
    <h3 id="plantName">${plant.name}</h3>
    <div class="d-flex justify-content-between">
      <p class="short-desc">${plant.shortDesc}</p>
      <p class="me-3">$${plant.price}</p>
    </div>
  `;

  // Add to cart button.
  let add = document.createElement("a");
  add.className = "add";
  add.innerHTML = `<i class="bi bi-bag-plus"></i>`;

  add.addEventListener("click", () => {
    statusCart.style.display = "flex";
    statusCart.innerHTML = cart.length + 1;
    cart.push(plant);

    // Modal added to cart.
    let added = document.createElement("p");
    added.innerHTML = plant.name + " added to cart";
    added.className = "added-modal";
    added.setAttribute("data-aos", "fade-right");

    const Added = () => {
      added.style.opacity = "0";
    };
    setTimeout(Added, 2500);

    plantsCards.append(added);
  });

  card.append(add);
  plantsCards.append(card);
});

// Filter.
for (let categorie of categories) {
  let a = document.createElement("a");
  a.innerHTML = categorie;
  a.style.cursor = "pointer";

  a.addEventListener("click", (e) => {
    plantsCards.style.display = "flex";
    plantsCards.style.justifyContent = "center";

    for (let plant of plantsCards.children) {
      plant.removeAttribute("data-aos");
      if (plant.id == e.target.innerHTML) {
        plant.style.display = "inline-block";
      } else {
        plant.style.display = "none";
      }
    }
  });

  filter.append(a);
}

// Cart.
let cartModal = document.createElement("div");
cartModal.className = "cart-modal";
cartModal.setAttribute("data-aos", "fade-down");
cartModal.setAttribute("data-aos-animation", "1500");

cartButton.addEventListener("click", () => {
  cartButton.href = "javascript:void(0)";
  modalCart.style.display = "flex";

  // Close cart button.
  let a = document.createElement("a");
  a.className = "exit";
  a.style.cursor = "pointer";
  a.href = "javascript:void(0)";
  a.innerHTML = `<img src="img/exit.svg" width=15>`;
  a.addEventListener("click", () => {
    modalCart.style.display = "none";
    cartModal.remove();
    return false;
  });

  cartModal.innerHTML = "<h4>Shopping Cart</h4>";

  // No products in the cart.
  let noPlants = document.createElement("p");
  noPlants.innerHTML = "No products in the cart.";
  noPlants.style.display = "none";
  cartModal.append(noPlants);
  if (cart.length == 0) {
    noPlants.style.display = "flex";
  }

  // Product in cart structure.
  cart.forEach((plant) => {
    let div = document.createElement("div");
    div.classList.add("plant-div", "d-flex", "justify-content-between");
    div.innerHTML = `
      <div class="d-flex">
        <div class="plant-img-container">
          <img src="${plant.image}" class="img-fluid" alt="">
        </div>
        <div>
          <p class="plant-name mb-0">${plant.name}</p>
          <p>1 x $${plant.price}</p>
        </div>  
      </div>
    `;

    // Remove plant.
    let removeContainer = document.createElement("div");
    removeContainer.className = "remove";
    removeContainer.innerHTML = '<a href=""><i class="bi bi-trash3"></i></a>';
    removeContainer.firstElementChild.href = "javascript:void(0)";
    removeContainer.addEventListener("click", () => {
      cart.pop();
      div.remove();

      if (cart.length == 0) {
        statusCart.style.display = "none";
      } else {
        statusCart.innerHTML = cart.length;
      }
    });

    div.append(removeContainer);
    cartModal.append(div);
  });

  cartModal.append(a);
  modalCart.append(cartModal);
});
