function searchItems() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const products = document.querySelectorAll(".card");

  products.forEach(product => {
    const name = product.getAttribute("data-name").toLowerCase();
    if (name.includes(input)) {
      product.style.display = "block";
    } else {
      product.remove(); // Удаляет другие
    }
  });
}