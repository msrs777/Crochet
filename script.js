const products = [
    {
        id: 1,
        name: "Crochet Flower",
        price: 199,
        image: "🌸"
    },

    {
        id: 2,
        name: "Crochet Handbag",
        price: 799,
        image: "👜"
    },

    {
        id: 3,
        name: "Crochet Teddy",
        price: 599,
        image: "🧸"
    },

    {
        id: 4,
        name: "Crochet Home Decor",
        price: 399,
        image: "🏠"
    }
];


let cart = [];


/* DISPLAY PRODUCTS */

function displayProducts() {

    const container =
        document.getElementById("product-container");

    container.innerHTML = "";

    products.forEach(product => {

        container.innerHTML += `

            <div class="product">

                <div class="product-image">
                    ${product.image}
                </div>

                <div class="product-info">

                    <h3>
                        ${product.name}
                    </h3>

                    <div class="price">
                        ₹${product.price}
                    </div>

                    <button
                        class="add-button"
                        onclick="addToCart(${product.id})"
                    >
                        Add to Cart
                    </button>

                </div>

            </div>

        `;
    });
}


/* ADD TO CART */

function addToCart(productId) {

    const product =
        products.find(
            product => product.id === productId
        );

    cart.push(product);

    updateCart();

}


/* UPDATE CART */

function updateCart() {

    document.getElementById("cart-count")
        .textContent = cart.length;


    const cartItems =
        document.getElementById("cart-items");

    cartItems.innerHTML = "";


    let total = 0;


    cart.forEach((product, index) => {

        total += product.price;

        cartItems.innerHTML += `

            <div class="cart-item">

                <span>
                    ${product.name}
                </span>

                <span>
                    ₹${product.price}
                </span>

            </div>

        `;

    });


    document.getElementById("cart-total")
        .textContent = total;

}


/* OPEN CART */

function openCart() {

    document
        .getElementById("cart")
        .classList
        .add("active");

}


/* CLOSE CART */

function closeCart() {

    document
        .getElementById("cart")
        .classList
        .remove("active");

}


/* START */

displayProducts();
