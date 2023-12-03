document.addEventListener("DOMContentLoaded", function () {
    const shoeList = document.getElementById("shoe-list");

    fetch("shoes.json")
        .then(response => response.json())
        .then(shoes => {
            shoes.forEach(shoe => {
                const shoeItem = document.createElement("div");
                shoeItem.classList.add("shoe-item");

                shoeItem.innerHTML = `
                    <img src="${shoe.image}" alt="${shoe.name}">
                    <h3>${shoe.name}</h3>
                    <p>${shoe.brand}</p>
                    <p>$${shoe.price.toFixed(2)}</p>
                    <button class="add-to-cart" onclick="addToCart('${shoe.name}')">Add to Cart</button>
                `;

                shoeList.appendChild(shoeItem);
            });
        })
        .catch(error => console.error("Error fetching shoes:", error));

    fetch("items.json")
        .then(response => response.json())
        .then(data => {
            let displayOutput = "<tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Age</th><th>Image</th></tr>";
            for (const item of data) {
                displayOutput += `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.firstName}</td>
                        <td>${item.lastName}</td>
                        <td>${item.age}</td>
                        <td><img src="${item.images}" class="image-format"></td>
                    </tr>`;
            }

            document.querySelector("#output").innerHTML = displayOutput;
        })
        .catch(error => console.error("Error fetching user items:", error));
});

function addToCart(item) {
    alert(item + ' added to cart!');
    // Add your cart functionality here
}
