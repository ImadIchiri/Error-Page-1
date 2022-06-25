// Incon From Font Awsesome
// <i class="fa-solid fa-star"></i>

const parent = document.getElementById("parent");

for (let i = 0; i < 25; i++) {
  let star = document.createElement("i");
  star.className = "fa-solid fa-star star";

  star.style.top = `${randomeNumber()}%`;
  star.style.left = `${randomeNumber()}%`;

  i % 2 === 0 ? star.classList.add("small-stars") : "";

  parent.append(star);
}

function randomeNumber() {
  return Math.floor(Math.random() * 99);
}
