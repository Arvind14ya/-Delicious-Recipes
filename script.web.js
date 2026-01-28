
//📂 Load recipes from external JSON
// fetch("recipes.json")
//   .then(res => res.json())
//   .then(data => {
//     allRecipes = data; // store globally for search
//     renderRecipes(allRecipes);
//   })
//   .catch(err => console.error("Error loading recipes:", err));

const recipes = [
  { 
    title: "Pizza",
    image: "image/img3.jpg",
    description: `Classic homemade pizza with gooey cheese and fresh toppings. 
Steps: 1. Prepare the dough. 2. Add sauce, cheese, and toppings. 3. Bake until golden.`,
    video: "https://www.youtube.com/embed/3oOEAzvVnJI"
  },
  { 
    title: "Burger",
    image: "image/img6.jpg",
    description: `Juicy grilled burger with melted cheese and fresh veggies. 
Steps: 1. Shape and season patties. 2. Grill and assemble with buns and toppings.`,
    video: "https://www.youtube.com/embed/s0tT5K4HgYo"
  },
  { 
    title: "Classic Rice",
    image: "image/img7.jpg",
    description: `Fluffy steamed basmati rice, perfect as a side. 
Steps: 1. Rinse and soak rice. 2. Cook in water with a pinch of salt until tender.`,
    video: "https://www.youtube.com/embed/yU8Lp5dfnhA"
  },
  { 
    title: "Chicken Curry",
    image: "image/img8.jpg",
    description: `Spicy chicken curry simmered in rich gravy. 
Steps: 1. Sauté onions and spices. 2. Add chicken, cook, then simmer with tomatoes.`,
    video: "https://www.youtube.com/embed/COZK7NATh4k"
  },
  { 
    title: "Tandoori Chicken Tikka",
    image: "image/img1.jpg",
    description: `Tandoori-marinated chicken grilled to perfection. 
Steps: 1. Marinate in yogurt and spices. 2. Grill or bake until charred.`,
    video: "https://www.youtube.com/embed/xEni0VdKVHc"
  },
  { 
    title: "Veg Noodles",
    image: "image/img9.jpg",
    description: `Stir-fried noodles with fresh vegetables. 
Steps: 1. Boil noodles. 2. Stir-fry veggies with sauce. 3. Mix and serve hot.`,
    video: "https://www.youtube.com/embed/r_L3ymK0Z5E"
  },
  { 
    title: "Delicious Fish Without Oil",
    image: "image/img10.jpg",
    description: `Healthy steamed fish recipe without a drop of oil. 
Steps: 1. Marinate fish with spices. 2. Steam in banana leaf / foil.`,
    video: "https://www.youtube.com/embed/ZxCXh5DUEwE"
  },
  { 
    title: "Frankie Roll",
    image: "image/img5.jpg",
    description: `Indian-style wrap filled with spiced veggies and chicken. 
Steps: 1. Cook filling. 2. Roll inside roti/paratha. 3. Serve hot.`,
    video: "https://www.youtube.com/embed/7Ky1A2L96h8"
  },
  {
    title: "Paneer Butter Masala",
    image: "image/pan.jpeg",
    description: `Soft paneer cubes in buttery tomato gravy. 
Steps: 1. Fry paneer. 2. Cook gravy. 3. Add cream & serve with naan.`,
    video: "https://www.youtube.com/embed/IgYcQXYg1TQ"
  },

 
  {
    title: "Chocolate Cake",
    image: "image/Chocolate_cake.jpeg",
    description: `Moist and fluffy chocolate cake with frosting. 
Steps: 1. Mix batter. 2. Bake. 3. Add chocolate frosting.`,
    video: "https://www.youtube.com/embed/b3dwJX2E6oE"
  },
 
  {
    title: "Cold Coffee",
    image: "image/Cold_Coffee.jpeg",
    description: `Refreshing iced coffee with cream and chocolate drizzle. 
Steps: 1. Blend milk, sugar, coffee. 2. Add ice cream & serve chilled.`,
    video: "https://www.youtube.com/embed/ZSk7SsmZVqk"
  },
 
  {
    "title": "Veg Biryani",
    "category": "Indian",
    "image": "image/veg.jpeg",
    "description": "Tasty Veg Biryani recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy1"
  },
  {
    "title": "Chicken Biryani",
    "category": "Indian",
    "image": "image/chicken_biryani.jpg",
    "description": "Tasty Chicken Biryani recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy2"
  },
  {
    "title": "Paneer Butter Masala",
    "category": "Indian",
    "image": "image/pan.jpeg",
    "description": "Tasty Paneer Butter Masala recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy3"
  },
  {
    "title": "Dal Tadka",
    "category": "Indian",
    "image": "image/dal.jpeg",
    "description": "Tasty Dal Tadka recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy4"
  },
 
  {
    "title": "Aloo Paratha",
    "category": "Indian",
    "image": "image/allo.jpeg",
    "description": "Tasty Aloo Paratha recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy8"
  },

  {
    "title": "Chole Bhature",
    "category": "Indian",
    "image": "image/cho.jpeg",
    "description": "Tasty Chole Bhature recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy10"
  },
 
  
  {
    "title": "Veg Burger",
    "category": "Fast Food",
    "image": "image/bug.jpeg",
    "description": "Tasty Veg Burger recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy22"
  },
  {
    "title": "Cheese Sandwich",
    "category": "Fast Food",
    "image": "image/sandwich.jpeg",
    "description": "Tasty Cheese Sandwich recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy23"
  },
  {
    "title": "French Fries",
    "category": "Fast Food",
    "image": "image/fra.jpeg",
    "description": "Tasty French Fries recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy24"
  },

];

 const recipeGrid = document.getElementById("recipeGrid");
const recipeModal = document.getElementById("recipeModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalClose = document.getElementById("modalClose");
const modalVideoWrapper = document.getElementById("modalVideoWrapper");
const modalVideo = document.getElementById("modalVideo");

function renderRecipes(data) {
  recipeGrid.innerHTML = "";
  data.forEach((recipe, i) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}" loading="lazy"/>
      <div class="card-body">
        <h4>${recipe.title}</h4>
        <p>${recipe.description.split("\n")[0]}</p>
      </div>
    `;
    card.addEventListener("click", () => openModal(recipe));
    recipeGrid.appendChild(card);
  });
}

function openModal(recipe) {
  modalTitle.textContent = recipe.title;
  modalText.textContent = recipe.description;
  if (recipe.video) {
    modalVideo.src = recipe.video + "?autoplay=1";
    modalVideoWrapper.style.display = "block";
  } else {
    modalVideoWrapper.style.display = "none";
    modalVideo.src = "";
  }
  recipeModal.classList.add("show");
}

function closeModal() {
  recipeModal.classList.remove("show");
  modalVideo.src = ""; // Stop video playback
}

modalClose.addEventListener("click", closeModal);
window.addEventListener("click", (e) => {
  if (e.target === recipeModal) closeModal();
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Search
document.getElementById("searchInput").addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();
  const filtered = recipes.filter(r => r.title.toLowerCase().includes(keyword));
  renderRecipes(filtered);
});

// Navigation
document.getElementById("burger").addEventListener("click", () => {
  document.getElementById("nav-links").classList.add("active");
});
document.getElementById("closeNav").addEventListener("click", () => {
  document.getElementById("nav-links").classList.remove("active");
});
document.getElementById("overlay").addEventListener("click", () => {
  document.getElementById("nav-links").classList.remove("active");
});

// Back to top
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Theme toggle
const toggleTheme = document.getElementById("toggleTheme");
toggleTheme.addEventListener("click", () => {
  const html = document.documentElement;
  const newTheme = html.dataset.theme === "dark" ? "light" : "dark";
  html.dataset.theme = newTheme;
  localStorage.setItem("theme", newTheme);
  toggleTheme.innerHTML = newTheme === "dark" ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.dataset.theme = savedTheme;
  toggleTheme.innerHTML = savedTheme === "dark" ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Form validation
document.getElementById("subscribeForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email");
  const msg = document.getElementById("formMsg");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email.value)) {
    msg.textContent = "Please enter a valid email address.";
    msg.style.color = "white";
    return;
  }
  msg.textContent = "Thank you for subscribing!";
  msg.style.color = "Aqua";
  email.value = ""; 
});

renderRecipes(recipes);
