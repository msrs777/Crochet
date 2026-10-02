'use strict';


/* =====================================================
   WHATSAPP NUMBER
===================================================== */

const WHATSAPP_NUMBER = "919937867737";


/* =====================================================
   PRODUCT DATA
===================================================== */

const products = [

    {
        id: 1,
        name: "Crochet Flower",
        category: "Flowers",
        price: 199,
        icon: "🌸",
        description:
            "A beautiful handmade crochet flower, perfect for gifts, decoration and special occasions.",
        newArrival: true
    },

    {
        id: 2,
        name: "Crochet Handbag",
        category: "Bags",
        price: 799,
        icon: "👜",
        description:
            "A stylish handmade crochet handbag made for everyday use and special outings.",
        newArrival: false
    },

    {
        id: 3,
        name: "Crochet Teddy",
        category: "Toys",
        price: 599,
        icon: "🧸",
        description:
            "A cute handmade crochet teddy that makes a lovely gift for someone special.",
        newArrival: true
    },

    {
        id: 4,
        name: "Crochet Home Decor",
        category: "Home Decor",
        price: 399,
        icon: "🏠",
        description:
            "Handmade crochet décor to add a warm and beautiful touch to your home.",
        newArrival: false
    },

    {
        id: 5,
        name: "Crochet Gift Set",
        category: "Gifts",
        price: 499,
        icon: "🎁",
        description:
            "A thoughtful handmade crochet gift for birthdays, celebrations and special moments.",
        newArrival: true
    },

    {
        id: 6,
        name: "Custom Crochet Creation",
        category: "Custom",
        price: 0,
        icon: "✨",
        description:
            "Have something special in mind? Contact us to discuss a custom crochet creation.",
        newArrival: true
    }

];


/* =====================================================
   DISPLAY PRODUCTS
===================================================== */

function displayProducts(list = products) {

    const container =
        document.getElementById("product-container");

    const noProducts =
        document.getElementById("no-products");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    if (list.length === 0) {

        if (noProducts) {
            noProducts.style.display = "block";
        }

        return;
    }

    if (noProducts) {
        noProducts.style.display = "none";
    }

    list.forEach(product => {

        const priceHTML =
            product.price === 0
                ? "Custom Price"
                : "₹" + product.price;

        container.innerHTML += `

            <article class="product-card">

                <div class="product-image">
                    ${product.icon}
                </div>

                <div class="product-info">

                    <div class="product-category">
                        ${product.category}
                    </div>

                    <h3 class="product-name">
                        ${product.name}
                    </h3>

                    <p class="product-description">
                        ${product.description}
                    </p>

                    <div class="product-price">
                        ${priceHTML}
                    </div>

                    <div class="product-actions">

                        <button
                            type="button"
                            class="view-button"
                            onclick="openProductModal(${product.id})">

                            View

                        </button>

                        <button
                            type="button"
                            class="order-button"
                            onclick="orderProduct(${product.id})">

                            WhatsApp

                        </button>

                    </div>

                </div>

            </article>

        `;

    });

}


/* =====================================================
   SEARCH PRODUCTS
===================================================== */

function searchProducts() {

    const searchInput =
        document.getElementById("product-search");

    const categorySelect =
        document.getElementById("category-filter");

    if (!searchInput || !categorySelect) {
        return;
    }

    const searchText =
        searchInput.value
            .trim()
            .toLowerCase();

    const selectedCategory =
        categorySelect.value;

    const filtered =
        products.filter(product => {

            const matchesSearch =
                product.name
                    .toLowerCase()
                    .includes(searchText)
                ||
                product.category
                    .toLowerCase()
                    .includes(searchText);

            const matchesCategory =
                selectedCategory === "All"
                ||
                product.category === selectedCategory;

            return matchesSearch && matchesCategory;

        });

    displayProducts(filtered);

}


/* =====================================================
   FILTER PRODUCTS
===================================================== */

function filterProducts() {

    searchProducts();

}


/* =====================================================
   FILTER BY CATEGORY
===================================================== */

function filterCategory(category) {

    const select =
        document.getElementById("category-filter");

    const search =
        document.getElementById("product-search");

    const shop =
        document.getElementById("shop");

    if (!select) {
        return;
    }

    select.value = category;

    if (search) {
        search.value = "";
    }

    searchProducts();

    if (shop) {

        shop.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =====================================================
   ORDER PRODUCT ON WHATSAPP
===================================================== */

function orderProduct(productId) {

    const product =
        products.find(
            item => item.id === productId
        );

    if (!product) {
        return;
    }

    const priceText =
        product.price === 0
            ? "Custom Price"
            : "₹" + product.price;

    const message =

        "🧶 Hello Thread & Bloom Crochet!\n\n" +

        "I am interested in this product:\n\n" +

        "Product: " +
        product.name +
        "\n" +

        "Category: " +
        product.category +
        "\n" +

        "Price: " +
        priceText +
        "\n\n" +

        "Please let me know about availability and delivery.\n\n" +

        "Thank you!";

    const whatsappURL =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);

    window.open(
        whatsappURL,
        "_blank"
    );

}


/* =====================================================
   PRODUCT DETAILS MODAL
===================================================== */

function openProductModal(productId) {

    const product =
        products.find(
            item => item.id === productId
        );

    if (!product) {
        return;
    }

    const modal =
        document.getElementById("product-modal");

    const content =
        document.getElementById(
            "modal-product-content"
        );

    if (!modal || !content) {
        return;
    }

    const priceText =
        product.price === 0
            ? "Custom Price"
            : "₹" + product.price;

    content.innerHTML = `

        <div class="modal-product-image">
            ${product.icon}
        </div>

        <div class="modal-product-category">
            ${product.category}
        </div>

        <h2 class="modal-product-title">
            ${product.name}
        </h2>

        <div class="modal-product-price">
            ${priceText}
        </div>

        <p class="modal-product-description">
            ${product.description}
        </p>

        <button
            type="button"
            class="primary-button"
            onclick="orderProduct(${product.id})">

            💬 Order on WhatsApp

        </button>

    `;

    modal.classList.add("show");

    document.body.classList.add("modal-open");

}


/* =====================================================
   CLOSE PRODUCT MODAL
===================================================== */

function closeProductModal() {

    const modal =
        document.getElementById("product-modal");

    if (!modal) {
        return;
    }

    modal.classList.remove("show");

    document.body.classList.remove("modal-open");

}


/* =====================================================
   PRODUCT MODAL - CLICK OUTSIDE
===================================================== */

document.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById("product-modal");

        if (
            modal &&
            event.target === modal
        ) {

            closeProductModal();

        }

    }
);


/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMobileMenu() {

    const menu =
        document.getElementById("mobile-nav");

    if (!menu) {
        return;
    }

    menu.classList.toggle("show");

}


/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

function closeMobileMenu() {

    const menu =
        document.getElementById("mobile-nav");

    if (!menu) {
        return;
    }

    menu.classList.remove("show");

}


/* =====================================================
   BOOKING FORM
===================================================== */

function openBookingForm() {

    const modal =
        document.getElementById("booking-modal");

    const productSelect =
        document.getElementById("booking-product");

    if (!modal || !productSelect) {
        return;
    }


    /* Fill product list */

    productSelect.innerHTML = `

        <option value="">
            Please select a product
        </option>

    `;


    products.forEach(product => {

        productSelect.innerHTML += `

            <option value="${product.name}">
                ${product.name}
            </option>

        `;

    });


    modal.classList.add("show");

    document.body.classList.add("modal-open");

}


/* =====================================================
   CLOSE BOOKING FORM
===================================================== */

function closeBookingForm() {

    const modal =
        document.getElementById("booking-modal");

    if (!modal) {
        return;
    }

    modal.classList.remove("show");

    document.body.classList.remove("modal-open");

}


/* =====================================================
   SEND BOOKING TO WHATSAPP
===================================================== */

function sendBookingToWhatsApp(event) {

    event.preventDefault();


    const name =
        document
            .getElementById("customer-name")
            .value
            .trim();


    const phone =
        document
            .getElementById("customer-phone")
            .value
            .trim();


    const product =
        document
            .getElementById("booking-product")
            .value;


    const details =
        document
            .getElementById("booking-details")
            .value
            .trim();


    const nameError =
        document.getElementById("name-error");


    const phoneError =
        document.getElementById("phone-error");


    nameError.textContent = "";

    phoneError.textContent = "";


    /* NAME VALIDATION */

    if (!name) {

        nameError.textContent =
            "Name is required";

        return;

    }


    /* PHONE VALIDATION */

    const phoneDigits =
        phone.replace(/\D/g, "");


    if (
        phoneDigits.length < 10 ||
        phoneDigits.length > 15
    ) {

        phoneError.textContent =
            "Valid phone number is required";

        return;

    }


    /* PRODUCT VALIDATION */

    if (!product) {

        alert(
            "Please select a product"
        );

        return;

    }


    /* CREATE WHATSAPP MESSAGE */

    let message =

        "🧶 Hello Thread & Bloom Crochet!\n\n" +

        "I would like to enquire about a product.\n\n" +

        "Name: " +
        name +
        "\n\n" +

        "Phone: " +
        phone +
        "\n\n" +

        "Product: " +
        product;


    if (details) {

        message +=

            "\n\nAdditional Details: " +
            details;

    }


    message +=

        "\n\nPlease contact me regarding this request.";


    /* WHATSAPP URL */

    const whatsappURL =

        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);


    /* OPEN WHATSAPP */

    window.open(
        whatsappURL,
        "_blank"
    );


    /* CLOSE */

    closeBookingForm();


    /* RESET */

    const form =
        document.getElementById("booking-form");

    if (form) {
        form.reset();
    }

}


/* =====================================================
   BOOKING MODAL - CLICK OUTSIDE
===================================================== */

document.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById("booking-modal");

        if (
            modal &&
            event.target === modal
        ) {

            closeBookingForm();

        }

    }
);


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeProductModal();

            closeBookingForm();

        }

    }
);


/* =====================================================
   START WEBSITE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        displayProducts();

    }
);