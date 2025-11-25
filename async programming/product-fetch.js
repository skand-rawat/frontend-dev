async function fetchProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();

    products.forEach(p => {
      console.log(`Product: ${p.title}`);
      console.log(`Price: $${p.price}`);
      console.log(`Image: ${p.image}`);
      console.log("------");
    });

    // Bonus: create cards
    products.forEach(p => {
      const card = document.createElement("div");
      card.innerHTML = `<h3>${p.title}</h3><p>$${p.price}</p><img src="${p.image}" width="100">`;
      document.body.appendChild(card);
    });

  } catch (err) {
    console.error("Failed to load products. Please try again.");
  }
}

fetchProducts();