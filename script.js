'use strict';


/* =====================================================
   WHATSAPP
===================================================== */

const WHATSAPP_NUMBER = "919937867737";

/* =====================================================
   UPI PAYMENT SETTINGS
===================================================== */

const UPI_ID = "ms.sanju2@axl";
const UPI_PAYEE_NAME = "Mrisha Crochet & Craft";
const UPI_QR_IMAGE = "images/payment/upi-qr.png";

const INDIA_STATES = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry"
];


/* =====================================================
   PRODUCT DATA
===================================================== */

const products = [

    {
    id: 1,
    name: "Crochet Flower",
    category: "Flowers",
	
    image: "images/products/Flowers/flower.jpeg",

    images: [
        "images/products/Flowers/flower.jpeg"
    ],

    price: 199,

    description:
        "A beautiful handmade crochet flower, perfect for gifts, decoration and special occasions.",

    newArrival: true
},


    {
    id: 9,

    name: "Crochet Rose",

    category: "Flowers",

    price: 299,

    icon: "🌹",

    image: "images/hero/crochet-9-hero.jpg",

    description:
        "A beautiful handmade crochet rose, perfect for gifts, decoration and special occasions.",

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
   PRICE FORMAT
===================================================== */

function getPriceText(product) {

    if (product.price === 0) {

        return "Custom Price";

    }

    return "₹" + product.price;

}


/* =====================================================
   DISPLAY PRODUCTS
===================================================== */


function displayProducts(list = products) {
    const container = document.getElementById("product-container");
    const noProducts = document.getElementById("no-products");

    if (!container) return;

    container.innerHTML = "";

    if (list.length === 0) {
        if (noProducts) noProducts.style.display = "block";
        return;
    }

    if (noProducts) noProducts.style.display = "none";

    list.forEach(product => {
        const imageHTML = product.image
            ? `<img
                src="${product.image}"
                alt="${product.name}"
                onclick="openProductModal(${product.id})"
                style="width:100%;height:100%;object-fit:contain;display:block;cursor:pointer;"
               >`
            : `<div onclick="openProductModal(${product.id})"
                style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:90px;cursor:pointer;">
                ${product.icon || "🧶"}
               </div>`;

        container.innerHTML += `
            <article class="product-card">
                <div class="product-image">
                    ${imageHTML}
                </div>

                <div class="product-name-price">
                    <span>${product.name}</span>
                    <span>${getPriceText(product)}</span>
                </div>

                <div class="product-action-buttons">
                    <button type="button"
                        class="add-cart-button"
                        onclick="addToCart(${product.id})">
                        🛒 Add to Cart
                    </button>

                    <button type="button"
                        class="buy-now-button"
                        onclick="buyNow(${product.id})">
                        Buy Now
                    </button>
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
                    .includes(searchText)

                ||

                product.description
                    .toLowerCase()
                    .includes(searchText);


            const matchesCategory =

                selectedCategory === "All"

                ||

                product.category === selectedCategory;


            return (
                matchesSearch &&
                matchesCategory
            );

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
   ORDER PRODUCT
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
        getPriceText(product);


    const message =

        "🧶 Hello Miora Croche & Craft!\n\n" +

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

        "Please let me know about availability, delivery and payment.\n\n" +

        "Thank you!";


    openWhatsApp(message);

}


/* =====================================================
   OPEN WHATSAPP
===================================================== */

function openWhatsApp(message) {

    const whatsappURL =

        "https://wa.me/" +

        WHATSAPP_NUMBER +

        "?text=" +

        encodeURIComponent(message);


    window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
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
        getPriceText(product);


    /* PRODUCT IMAGES */

    const productImages =
        Array.isArray(product.images) &&
        product.images.length > 0
            ? product.images
            : [product.image];


    /* MAIN IMAGE */

    const mainImage =
        productImages[0];


    /* THUMBNAILS */

    const thumbnails =
        productImages.map(
            (image, index) => {

                return `

                    <button
                        type="button"
                        class="gallery-thumbnail"
                        onclick="changeModalProductImage(${productId}, ${index})">

                        <img
                            src="${image}"
                            alt="${product.name} image ${index + 1}">

                    </button>

                `;

            }
        ).join("");


    /* MODAL CONTENT */

    content.innerHTML = `

        <div class="product-gallery-new">


            <div class="product-main-image-new">

                <img
                    id="modal-main-product-image"
                    src="${mainImage}"
                    alt="${product.name}">

            </div>


            <div class="product-thumbnails-new">

                ${thumbnails}

            </div>


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


<div class="product-action-buttons">

    <button
        type="button"
        class="add-cart-button"
        onclick="addToCart(${product.id})">
        🛒 Add to Cart
    </button>

    <button
        type="button"
        class="buy-now-button"
        onclick="buyNow(${product.id})">
        Buy Now
    </button>

</div>


    `;


    modal.classList.add("show");


    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-open"
    );

}


function changeModalProductImage(
    productId,
    imageIndex
) {

    const product =
        products.find(
            item => item.id === productId
        );

    if (!product) {
        return;
    }


    const images =
        Array.isArray(product.images) &&
        product.images.length > 0
            ? product.images
            : [product.image];


    const mainImage =
        document.getElementById(
            "modal-main-product-image"
        );


    if (!mainImage) {
        return;
    }


    if (!images[imageIndex]) {
        return;
    }


    mainImage.src =
        images[imageIndex];

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


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-open"
    );

}


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
        document.getElementById(
            "booking-product"
        );


    if (!modal || !productSelect) {

        return;

    }


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


    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-open"
    );

}


/* =====================================================
   CLOSE BOOKING FORM
===================================================== */

function closeBookingForm() {

    const modal =
        document.getElementById(
            "booking-modal"
        );


    if (!modal) {

        return;

    }


    modal.classList.remove("show");


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-open"
    );

}


/* =====================================================
   SEND BOOKING TO WHATSAPP
===================================================== */

function sendBookingToWhatsApp(event) {

    event.preventDefault();


    const nameElement =
        document.getElementById(
            "customer-name"
        );


    const phoneElement =
        document.getElementById(
            "customer-phone"
        );


    const productElement =
        document.getElementById(
            "booking-product"
        );


    const detailsElement =
        document.getElementById(
            "booking-details"
        );


    const nameError =
        document.getElementById(
            "name-error"
        );


    const phoneError =
        document.getElementById(
            "phone-error"
        );


    if (
        !nameElement ||
        !phoneElement ||
        !productElement ||
        !detailsElement
    ) {

        return;

    }


    const name =
        nameElement.value.trim();


    const phone =
        phoneElement.value.trim();


    const product =
        productElement.value;


    const details =
        detailsElement.value.trim();


    if (nameError) {

        nameError.textContent = "";

    }


    if (phoneError) {

        phoneError.textContent = "";

    }


    /* NAME VALIDATION */

    if (!name) {

        if (nameError) {

            nameError.textContent =
                "Name is required.";

        }

        nameElement.focus();

        return;

    }


    /* PHONE VALIDATION */

    const phoneDigits =
        phone.replace(/\D/g, "");


    if (
        phoneDigits.length < 10 ||
        phoneDigits.length > 15
    ) {

        if (phoneError) {

            phoneError.textContent =
                "Please enter a valid phone number.";

        }

        phoneElement.focus();

        return;

    }


    /* PRODUCT VALIDATION */

    if (!product) {

        alert(
            "Please select a product."
        );

        productElement.focus();

        return;

    }


    /* WHATSAPP MESSAGE */

    let message =

        "🧶 Hello Miora Croche & Craft!\n\n" +

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

        "\n\nPlease contact me regarding this request.\n\n" +

        "Thank you!";


    openWhatsApp(message);


    closeBookingForm();


    const form =
        document.getElementById(
            "booking-form"
        );


    if (form) {

        form.reset();

    }

}


/* =====================================================
   MODAL CLICK OUTSIDE
===================================================== */

document.addEventListener(
    "click",
    function(event) {


        const productModal =
            document.getElementById(
                "product-modal"
            );


        if (
            productModal &&
            event.target === productModal
        ) {

            closeProductModal();

        }


        const bookingModal =
            document.getElementById(
                "booking-modal"
            );


        if (
            bookingModal &&
            event.target === bookingModal
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

            closeMobileMenu();

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


/* =====================================================
   COURSES MENU
===================================================== */

function openCoursesMenu() {

    const menu =
        document.getElementById("courses-menu");


    if (menu) {

        menu.classList.add("active");

        menu.setAttribute(
            "aria-hidden",
            "false"
        );

    }

}


function closeCoursesMenu() {

    const menu =
        document.getElementById("courses-menu");


    if (menu) {

        menu.classList.remove("active");

        menu.setAttribute(
            "aria-hidden",
            "true"
        );

    }

}


/* =====================================================
   COURSE SELECTION
===================================================== */

function selectCourse(courseName) {


    /* ================================================
       OFFLINE CLASSES → BEAUTIFUL POPUP
    ================================================= */

    if (courseName === "Offline Classes") {

        closeCoursesMenu();

        openOfflineClass();

        return;

    }


    /* ================================================
       ONLINE CLASSES → WHATSAPP
    ================================================= */

    if (courseName === "Online Classes") {

        closeCoursesMenu();


        const message =

            "Hello Miora Croche & Craft,\n\n" +

            "I am interested in your Online Crochet Classes.\n\n" +

            "Please share the course details, fees and timings.";


        openWhatsApp(message);


        return;

    }

}


/* =====================================================
   OFFLINE CLASS POPUP
===================================================== */

function openOfflineClass() {

    const offlineClassModal =
        document.getElementById(
            "offline-class-modal"
        );


    if (!offlineClassModal) {

        return;

    }


    offlineClassModal.classList.add(
        "active"
    );


    offlineClassModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "offline-open"
    );


    document.body.style.overflow =
        "hidden";

}


/* =====================================================
   CLOSE OFFLINE CLASS POPUP
===================================================== */

function closeOfflineClass() {

    const offlineClassModal =
        document.getElementById(
            "offline-class-modal"
        );


    if (!offlineClassModal) {

        return;

    }


    offlineClassModal.classList.remove(
        "active"
    );


    offlineClassModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "offline-open"
    );


    document.body.style.overflow =
        "";

}


/* =====================================================
   OFFLINE POPUP CLICK OUTSIDE
===================================================== */

document.addEventListener(
    "click",
    function(event) {


        const offlineClassModal =
            document.getElementById(
                "offline-class-modal"
            );


        if (!offlineClassModal) {

            return;

        }


        if (
            event.target === offlineClassModal
        ) {

            closeOfflineClass();

        }

    }
);


/* =====================================================
   ESCAPE KEY FOR OFFLINE POPUP
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {


        if (event.key === "Escape") {


            const offlineClassModal =
                document.getElementById(
                    "offline-class-modal"
                );


            if (
                offlineClassModal &&
                offlineClassModal.classList.contains(
                    "active"
                )
            ) {

                closeOfflineClass();

            }

        }

    }
);




/* =====================================================
   MAIN CROCHET IMAGE SLIDER
===================================================== */

let currentHeroSlide = 0;
let heroSliderInterval;


/* =====================================================
   SHOW HERO SLIDE
===================================================== */

function showHeroSlide(index) {

    const slides =
        document.querySelectorAll(
            ".hero-slide"
        );

    const dots =
        document.querySelectorAll(
            ".hero-dot"
        );


    if (!slides.length) {
        return;
    }


    if (index >= slides.length) {
        index = 0;
    }


    if (index < 0) {
        index = slides.length - 1;
    }


    currentHeroSlide = index;


    slides.forEach(
        function(slide, i) {

            slide.classList.toggle(
                "active",
                i === currentHeroSlide
            );

        }
    );


    dots.forEach(
        function(dot, i) {

            dot.classList.toggle(
                "active",
                i === currentHeroSlide
            );

        }
    );

}


/* =====================================================
   NEXT HERO SLIDE
===================================================== */

function nextHeroSlide() {

    showHeroSlide(
        currentHeroSlide + 1
    );

}


/* =====================================================
   START HERO SLIDER
===================================================== */

function startHeroSlider() {

    if (heroSliderInterval) {

        clearInterval(
            heroSliderInterval
        );

    }


    heroSliderInterval =
        setInterval(
            function() {

                nextHeroSlide();

            },
            4500
        );

}


/* =====================================================
   START WHEN PAGE LOADS
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        showHeroSlide(0);

        startHeroSlider();

    }
);







/* =====================================================
   SHOPPING CART
===================================================== */

let shoppingCart = [];



function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = shoppingCart.find(
        item => item.id === productId
    );

    if (existingItem) {
        existingItem.quantity++;
    } else {
        shoppingCart.push({
            id: product.id,
            quantity: 1
        });
    }

    updateCartDisplay();
    renderShoppingCart();

    // Show a small cart notification
    let notification = document.getElementById("cart-notification");

    if (!notification) {
        notification = document.createElement("div");
        notification.id = "cart-notification";

        Object.assign(notification.style, {
            position: "fixed",
            bottom: "25px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#a95770",
            color: "#ffffff",
            padding: "12px 22px",
            borderRadius: "30px",
            fontSize: "15px",
            fontWeight: "bold",
            boxShadow: "0 3px 12px #0003",
            zIndex: "20000",
            textAlign: "center"
        });

        document.body.appendChild(notification);
    }

    const totalItems = shoppingCart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    notification.textContent =
        totalItems + (totalItems === 1
            ? " item added to cart"
            : " items added to cart");

    notification.style.display = "block";

    clearTimeout(notification.hideTimer);

    notification.hideTimer = setTimeout(() => {
        notification.style.display = "none";
    }, 2000);
}


function updateCartDisplay() {
    let cartButton = document.getElementById("shopping-cart-button");

    if (!cartButton) {
        cartButton = document.createElement("button");
        cartButton.id = "shopping-cart-button";
        cartButton.type = "button";
        cartButton.onclick = openShoppingCart;

        Object.assign(cartButton.style, {
            position: "fixed",
            right: "20px",
            bottom: "90px",
            zIndex: "9998",
            padding: "13px 18px",
            border: "none",
            borderRadius: "30px",
            background: "#a95770",
            color: "#ffffff",
            fontSize: "15px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 3px 12px #0002"
        });

        document.body.appendChild(cartButton);
    }

    const count = shoppingCart.reduce(
        (total, item) => total + item.quantity, 0
    );

    cartButton.textContent = `🛒 Cart (${count})`;
}

function openShoppingCart() {
    let modal = document.getElementById("shopping-cart-modal");

    if (!modal) {
        modal = document.createElement("div");
        modal.id = "shopping-cart-modal";

        Object.assign(modal.style, {
            position: "fixed",
            inset: "0",
            zIndex: "10000",
            background: "#0008",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "15px"
        });

        modal.innerHTML = `
            <div style="background:#fffaf6;padding:24px;border-radius:16px;width:100%;max-width:480px;max-height:80vh;overflow:auto;">
                <button type="button" onclick="closeShoppingCart()"
                    style="float:right;font-size:24px;border:0;background:none;cursor:pointer;">×</button>
                <h2>🛒 Your Shopping Cart</h2>
                <div id="shopping-cart-items"></div>
                <h3 id="shopping-cart-total"></h3>
                <button type="button" onclick="checkoutShoppingCart()"
                    style="width:100%;padding:13px;margin-top:12px;background:#a95770;color:white;border:0;border-radius:8px;cursor:pointer;">
                    Buy Cart on WhatsApp
                </button>
            </div>
        `;

        document.body.appendChild(modal);
    }

    modal.style.display = "flex";
    renderShoppingCart();
}

function renderShoppingCart() {
    const itemsContainer = document.getElementById("shopping-cart-items");
    const totalElement = document.getElementById("shopping-cart-total");

    if (!itemsContainer || !totalElement) return;

    if (shoppingCart.length === 0) {
        itemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        totalElement.textContent = "";
        return;
    }

    let total = 0;

    itemsContainer.innerHTML = shoppingCart.map(item => {
        const product = products.find(p => p.id === item.id);
        if (!product) return "";

        total += product.price * item.quantity;

        return `
            <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;padding:12px 0;border-bottom:1px solid #eadbd5;">
                <div>
                    <strong>${product.name}</strong><br>
                    ${getPriceText(product)} × ${item.quantity}
                </div>
                
<div style="display:flex;gap:6px;align-items:center;">
    <button type="button"
        onclick="changeCartQuantity(${product.id},-1)">−</button>

    <span>${item.quantity}</span>

    <button type="button"
        onclick="changeCartQuantity(${product.id},1)">+</button>

    <button type="button"
        onclick="removeFromCart(${product.id})">🗑️</button>
</div>

            </div>
        `;
    }).join("");

    totalElement.textContent = "Total: ₹" + total;
}

function changeCartQuantity(productId, change) {
    const item = shoppingCart.find(p => p.id === productId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        shoppingCart = shoppingCart.filter(p => p.id !== productId);
    }

    updateCartDisplay();
    renderShoppingCart();
}

function removeFromCart(productId) {
    shoppingCart = shoppingCart.filter(p => p.id !== productId);
    updateCartDisplay();
    renderShoppingCart();
}

function closeShoppingCart() {
    const modal = document.getElementById("shopping-cart-modal");
    if (modal) modal.style.display = "none";
}








function buyNow(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Custom products need a confirmed price first.
    if (product.price === 0) {
        openWhatsApp(
            "Hello Mrisha Crochet & Craft!\n\n" +
            "I am interested in: " + product.name +
            "\nPlease confirm the price before I order."
        );
        return;
    }

    checkoutOrder = {
        productId: product.id,
        quantity: 1,
        customer: {},
        step: "address"
    };

    closeProductModal();
    closeShoppingCart();
    renderCheckout();
}


/* =====================================================
   CHECKOUT STATE AND HELPERS
===================================================== */

let checkoutOrder = null;



const COD_PIN_CODES = [
    // Bhubaneswar
    "751024", // Patia
    "751031", // Kanan Vihar area
    "751021", // Sailashree Vihar area
    "751016", // Chandrasekharpur
    "751013", // Acharya Vihar / Jaydev Vihar area
    "751022", // Bhubaneswar area

    // Cuttack
    "753001", // Cuttack GPO
    "753002", // Chandinichowk / Oriya Bazaar
    "753003", // College Square / Jobra
    "753004", // Chauliaganj / Nayabazar
    "753005", // Barabati area
    "753006", // CRRI area
    "753007", // Medical College area
    "753008", // Bidanasi area
    "753009", // Rajabagicha
    "753010", // Industrial Estate
    "753012", // Khannagar area
    "753013", // Kalyani Nagar
    "753014", // Bidanasi area
    "753015"  // CDA sectors
];

function isCODAvailable(pin) {
    return COD_PIN_CODES.includes(
        String(pin || "").trim()
    );
}


function isCODAvailable(pin) {
    return COD_PIN_CODES.includes(
        String(pin || "").trim()
    );
}


function checkoutEscape(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}


/* =====================================================
   DELIVERY CHARGE AND ORDER TOTAL
===================================================== */

// 0 means free delivery.
// Change this only when you decide your delivery charge.
const DELIVERY_CHARGE = 0;

function checkoutSubtotal() {
    if (!checkoutOrder) return 0;

    const product = products.find(
        p => p.id === checkoutOrder.productId
    );

    return product
        ? product.price * checkoutOrder.quantity
        : 0;
}

function checkoutTotal() {
    return checkoutSubtotal() + DELIVERY_CHARGE;
}


function checkoutAddressText(customer) {
    return [
        customer.address,
        customer.landmark,
        customer.city,
        customer.state,
        "PIN: " + customer.pin
    ].filter(Boolean).join(", ");
}


/* =====================================================
   CREATE AND DISPLAY CHECKOUT
===================================================== */

function renderCheckout() {
    if (!checkoutOrder) return;

    const product = products.find(
        p => p.id === checkoutOrder.productId
    );

    if (!product) return;

    let modal = document.getElementById("checkout-modal");

    if (!modal) {
        modal = document.createElement("div");
        modal.id = "checkout-modal";

        Object.assign(modal.style, {
            position: "fixed",
            inset: "0",
            zIndex: "10010",
            background: "#0009",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "15px",
            overflowY: "auto"
        });

        document.body.appendChild(modal);
    }

    modal.style.display = "flex";

    const boxStyle =
        "background:#fffaf6;padding:24px;border-radius:16px;" +
        "width:100%;max-width:520px;max-height:90vh;" +
        "overflow-y:auto;box-sizing:border-box;color:#432c32;";

    const fieldStyle =
        "width:100%;padding:12px;margin:6px 0 14px;" +
        "border:1px solid #dec9ce;border-radius:8px;" +
        "box-sizing:border-box;font:inherit;";

    const buttonStyle =
        "width:100%;padding:14px;margin-top:12px;" +
        "background:#a95770;color:white;border:0;" +
        "border-radius:9px;font-size:16px;font-weight:bold;" +
        "cursor:pointer;";

    let content = "";

    if (checkoutOrder.step === "address") {
        const saved = checkoutOrder.customer || {};
const savedQuantity = checkoutOrder.quantity || 1;
        content = `
            <h2>Delivery Details</h2>
            <p>
                <strong>${checkoutEscape(product.name)}</strong><br>
                ${checkoutEscape(getPriceText(product))}
            </p>

            <form id="checkout-address-form"
                onsubmit="submitCheckoutAddress(event)">

                <label>Full Name *</label>
                <input name="name" required maxlength="100"
    autocomplete="name"
    value="${checkoutEscape(saved.name || "")}"
    style="${fieldStyle}">

                <label>Mobile Number *</label>
                <input name="phone" type="tel" required
                    maxlength="16" autocomplete="tel"
                    placeholder="Your contact number"
                    style="${fieldStyle}">

                
<label>Full Delivery Address *</label>
<textarea name="address" required maxlength="500"
    autocomplete="street-address" rows="3"
    placeholder="House number, street, area"
    style="${fieldStyle}">${checkoutEscape(saved.address || "")}</textarea>


                <label>Landmark (optional)</label>
                <input name="landmark" maxlength="150"
                    style="${fieldStyle}">

                <label>City *</label>
                <input name="city" required maxlength="100"
                    autocomplete="address-level2"
                    style="${fieldStyle}">

                

<label>State *</label>
<select name="state" required style="${fieldStyle}">
    <option value="">Select your state</option>
    ${INDIA_STATES.map(state =>
        `<option value="${state}"
            ${saved.state === state ? "selected" : ""}>
            ${state}
        </option>`
    ).join("")}
</select>



                <label>PIN Code *</label>
                <input name="pin" required inputmode="numeric"
                    pattern="[0-9]{6}" maxlength="6"
                    autocomplete="postal-code"
                    placeholder="6-digit PIN code"
                    style="${fieldStyle}">

                <label>Quantity *</label>
                <input name="quantity" type="number"
                    min="1" max="99" value="1" required
                    style="${fieldStyle}">

                <p>Product price: ${checkoutEscape(getPriceText(product))}</p>
                <p>Delivery charges: Confirmed before payment</p>

                <button type="submit" style="${buttonStyle}">
                    Review Order
                </button>
            </form>
        `;
    }

    if (checkoutOrder.step === "confirm") {
        const customer = checkoutOrder.customer;

        content = `
            <h2>Confirm Your Order</h2>

            <p><strong>Product:</strong>
                ${checkoutEscape(product.name)}</p>

            <p><strong>Quantity:</strong>
                ${checkoutOrder.quantity}</p>

            <p><strong>Price per item:</strong>
                ${checkoutEscape(getPriceText(product))}</p>

            <p><strong>Subtotal:</strong>
                ₹${checkoutTotal()}</p>

            <p><strong>Delivery:</strong>
                To be confirmed by the seller</p>

            <hr>

            <h3>Delivery Address</h3>
            <p><strong>Name:</strong>
                ${checkoutEscape(customer.name)}</p>
            <p><strong>Mobile:</strong>
                ${checkoutEscape(customer.phone)}</p>
            <p><strong>Address:</strong>
                ${checkoutEscape(checkoutAddressText(customer))}</p>

            <p style="font-size:13px;color:#795f66">
                Please check all details before continuing.
                Any delivery charge will be confirmed before payment.
            </p>

            <button type="button" style="${buttonStyle}"
                onclick="continueToCheckoutPayment()">
                Confirm Details & Continue
            </button>

            <button type="button"
                onclick="editCheckoutAddress()"
                style="${buttonStyle}background:#eadbd5;color:#432c32">
                Edit Details
            </button>
        `;
    }


if (checkoutOrder.step === "payment-method") {
    const customer = checkoutOrder.customer;
    const amount = checkoutTotal();
    const codAvailable = isCODAvailable(customer.pin);

    content = `
        <h2>Choose Payment Method</h2>

        <p><strong>Product:</strong>
            ${checkoutEscape(product.name)}</p>

        <p><strong>Quantity:</strong>
            ${checkoutOrder.quantity}</p>

        <p><strong>Order total:</strong>
            <span style="color:#a95770;font-weight:bold">
                ₹${amount}
            </span>
        </p>

        <p style="color:#39744a">
            Delivery charges: FREE
        </p>

        <button type="button"
            style="${buttonStyle}"
            onclick="selectCheckoutPayment('upi')">
            Pay Using UPI
        </button>

        ${
            codAvailable
            ? `
                <button type="button"
                    style="${buttonStyle}background:#39744a"
                    onclick="placeCODOrder()">
                    Cash on Delivery (COD)
                </button>
            `
            : `
                <p style="font-size:13px;color:#795f66">
                    COD is not available for this PIN code.
                    You can still order using UPI.
                </p>
            `
        }

        <button type="button"
            style="${buttonStyle}background:#eadbd5;color:#432c32"
            onclick="editCheckoutAddress()">
            Back to Delivery Details
        </button>
    `;
}



    if (checkoutOrder.step === "payment") {
        const customer = checkoutOrder.customer;
        const amount = checkoutTotal();

        const upiLink =
            "upi://pay?pa=" + encodeURIComponent(UPI_ID) +
            "&pn=" + encodeURIComponent(UPI_PAYEE_NAME) +
            "&am=" + encodeURIComponent(amount.toFixed(2)) +
            "&cu=INR" +
            "&tn=" + encodeURIComponent(
                "Order: " + product.name
            );

        content = `
            <h2>Pay Using UPI</h2>

            <p><strong>Order:</strong>
                ${checkoutEscape(product.name)} ×
                ${checkoutOrder.quantity}</p>

            <p><strong>Amount:</strong>
                <span style="font-size:24px;color:#a95770">
                    ₹${amount}
                </span>
            </p>

            

            <div style="text-align:center;margin:20px 0">
                <img src="${checkoutEscape(UPI_QR_IMAGE)}"
                    alt="Mrisha Crochet & Craft UPI QR code"
                    style="width:220px;height:220px;object-fit:contain;
                    background:white;padding:8px;border-radius:10px;
                    max-width:100%"
                    onerror="this.style.display='none';
                    document.getElementById('qr-missing').style.display='block'">

                <p id="qr-missing" style="display:none;color:#a33">
                    QR image not found. Please add your UPI QR image
                    at ${checkoutEscape(UPI_QR_IMAGE)}.
                </p>

                <p>UPI ID: <strong>${checkoutEscape(UPI_ID)}</strong></p>

                <button type="button" style="${buttonStyle}"
                    onclick="GenUI_PLACEHOLDER">
                </button>
            </div>

            <a href="${checkoutEscape(upiLink)}"
                style="display:block;text-align:center;padding:14px;
                background:#a95770;color:white;border-radius:9px;
                text-decoration:none;font-weight:bold">
                Open UPI App
            </a>

            <p style="font-size:13px;margin-top:16px">
                Scan the QR code using your UPI app, verify the payee
                name and amount, and complete payment in your app.
            </p>

            <button type="button" style="${buttonStyle}"
                onclick="checkoutPaymentNotice()">
                I Have Paid — Send Order Details
            </button>

            <button type="button"
                onclick="editCheckoutAddress()"
                style="${buttonStyle}background:#eadbd5;color:#432c32">
                Back to Order Details
            </button>
        `;

        // Remove the unused placeholder button from the template.
        content = content.replace(
            /<button type="button" style="\$\{buttonStyle\}"\s*onclick="GenUI_PLACEHOLDER">\s*<\/button>/,
            ""
        );
    }

    modal.innerHTML = `
        <div style="${boxStyle}">
            <button type="button"
                onclick="closeCheckout()"
                aria-label="Close checkout"
                style="float:right;border:0;background:none;
                font-size:26px;cursor:pointer">×</button>
            ${content}
        </div>
    `;
}


/* =====================================================
   ADDRESS SUBMISSION
===================================================== */


/* =====================================================
   ADDRESS SUBMISSION WITH INDIA POST PIN VALIDATION
===================================================== */

async function submitCheckoutAddress(event) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const data = new FormData(form);

    const pin = String(data.get("pin") || "").trim();
    const selectedState = String(data.get("state") || "").trim();

    // Check that the PIN contains exactly six digits.
    if (!/^\d{6}$/.test(pin)) {
        alert("Please enter a valid 6-digit Indian PIN code.");
        form.elements.pin.focus();
        return;
    }

    // Check that a state has been selected.
    if (!selectedState) {
        alert("Please select your state.");
        form.elements.state.focus();
        return;
    }

    // Validate the PIN against the India Post directory.
    let pinResult;

    try {
        pinResult = await verifyIndiaPincode(pin, selectedState);
    } catch (error) {
        alert(
            "Unable to verify your PIN code right now. " +
            "Please check your internet connection and try again."
        );
        console.error("PIN verification error:", error);
        return;
    }

    // Reject PIN codes that are not found in the directory.
    if (!pinResult.valid) {
        alert(
            "This PIN code was not found in the India Post directory. " +
            "Please enter a valid Indian PIN code."
        );
        form.elements.pin.focus();
        return;
    }

    // Reject PIN codes belonging to another state.
    if (!pinResult.stateMatch) {
        alert(
            "The PIN code does not match the selected state: " +
            selectedState + ".\n\n" +
            "According to the postal directory, this PIN code belongs to: " +
            pinResult.states.join(", ") +
            ".\n\nPlease correct your state or PIN code."
        );
        form.elements.pin.focus();
        return;
    }

    // Validate the mobile number.
    const phone = String(data.get("phone") || "").trim();
    const phoneDigits = phone.replace(/\D/g, "");

    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
        alert("Please enter a valid mobile number.");
        form.elements.phone.focus();
        return;
    }

    // Validate quantity.
    const quantity = Number(data.get("quantity"));

    if (
        !Number.isInteger(quantity) ||
        quantity < 1 ||
        quantity > 99
    ) {
        alert("Please enter a valid quantity between 1 and 99.");
        form.elements.quantity.focus();
        return;
    }

    // Save the order only after PIN and state validation succeed.
    checkoutOrder.customer = {
        name: String(data.get("name") || "").trim(),
        phone,
        address: String(data.get("address") || "").trim(),
        landmark: String(data.get("landmark") || "").trim(),
        city: String(data.get("city") || "").trim(),
        state: selectedState,
        pin
    };

    checkoutOrder.quantity = quantity;
    checkoutOrder.step = "confirm";

    renderCheckout();
}


function selectCheckoutPayment(method) {
    if (!checkoutOrder || !checkoutOrder.customer) return;

    if (method === "upi") {
        if (!UPI_ID || UPI_ID === "YOUR_UPI_ID@bank") {
            alert("Please configure your real UPI ID first.");
            return;
        }

        // Preserve your existing UPI QR and payment screen.
        checkoutOrder.step = "payment";
        renderCheckout();
    }
}


javascript
function placeCODOrder() {
    if (!checkoutOrder || !checkoutOrder.customer) return;

    const customer = checkoutOrder.customer;

    if (!isCODAvailable(customer.pin)) {
        alert("COD is not available for this PIN code.");
        return;
    }

    const product = products.find(
        p => p.id === checkoutOrder.productId
    );

    if (!product) {
        alert("Product not found. Please try again.");
        return;
    }

    const total = checkoutTotal();
    const quantity = checkoutOrder.quantity;

    const orderMessage = [
        "NEW COD ORDER - Mrisha Crochet & Craft",
        "Product: " + product.name,
        "Quantity: " + quantity,
        "Total: Rs. " + total,
        "Delivery: FREE",
        "Payment: Cash on Delivery",
        "Customer: " + customer.name,
        "Phone: " + customer.phone,
        "Address: " + checkoutAddressText(customer)
    ].join("\n");

    const customerMessage =
        "Thank you, " + customer.name +
        "! Your COD order from Mrisha Crochet & Craft " +
        "has been placed successfully. Expected delivery: " +
        "3-5 working days. Order total: Rs. " + total +
        ". Payment: Cash on Delivery.";

    const whatsappURL =
        "https://wa.me/919937867737?text=" +
        encodeURIComponent(orderMessage);

    const smsURL =
        "sms:" + customer.phone.replace(/[^\d+]/g, "") +
        "?body=" + encodeURIComponent(customerMessage);

    const modal = document.getElementById("checkout-modal");

    if (!modal) return;

    modal.innerHTML = `
        <div style="
            background:#fffaf6;
            padding:28px 22px;
            border-radius:16px;
            width:100%;
            max-width:460px;
            box-sizing:border-box;
            text-align:center;
            color:#432c32;
        ">
            <div style="font-size:48px;color:#39744a">✓</div>

            <h2 style="color:#39744a">
                Order Placed Successfully!
            </h2>

            <p>Thank you,
                <strong>${checkoutEscape(customer.name)}</strong>!
            </p>

            <p>Your order is expected to arrive within
                <strong>3–5 working days</strong>.</p>

            <p><strong>Product:</strong>
                ${checkoutEscape(product.name)}</p>

            <p><strong>Quantity:</strong> ${quantity}</p>
            <p><strong>Total:</strong> ₹${total}</p>
            <p><strong>Payment:</strong> Cash on Delivery</p>

            <button type="button"
                id="cod-whatsapp-button"
                style="width:100%;padding:13px;margin-top:10px;
                background:#25D366;color:white;border:0;
                border-radius:9px;font-weight:bold;cursor:pointer">
                Send Order to Business on WhatsApp
            </button>

            <button type="button"
                id="cod-sms-button"
                style="width:100%;padding:13px;margin-top:10px;
                background:#a95770;color:white;border:0;
                border-radius:9px;font-weight:bold;cursor:pointer">
                Send SMS Confirmation
            </button>

            <p style="font-size:12px;color:#795f66">
                Press Send in WhatsApp or your SMS app to send
                the prepared message.
            </p>

            <button type="button" onclick="closeCheckout()"
                style="width:100%;padding:13px;margin-top:8px;
                background:#eadbd5;color:#432c32;border:0;
                border-radius:9px;font-weight:bold;cursor:pointer">
                Continue Shopping
            </button>
        </div>
    `;

    // Keep the success popup visible and open WhatsApp.
window.open(whatsappURL, "_blank");

    document.getElementById("cod-sms-button")
        .addEventListener("click", function () {
            window.location.href = smsURL;
        });
}





/* =====================================================
   CONFIRMATION AND PAYMENT
===================================================== */


function continueToCheckoutPayment() {
    if (!checkoutOrder || !checkoutOrder.customer) return;

    if (!UPI_ID || UPI_ID === "YOUR_UPI_ID@bank") {
        alert("Please configure your real UPI ID first.");
        return;
    }

    // Show payment options after order confirmation.
    checkoutOrder.step = "payment-method";
    renderCheckout();
}


function editCheckoutAddress() {
    if (!checkoutOrder) return;

    checkoutOrder.step = "address";
    renderCheckout();
}

function checkoutPaymentNotice() {
    if (!checkoutOrder) return;

    const product = products.find(
        p => p.id === checkoutOrder.productId
    );

    if (!product) return;

    const customer = checkoutOrder.customer;

    const message =
        "Hello Mrisha Crochet & Craft!\n\n" +
        "I would like to confirm my order and report my UPI payment.\n\n" +
        "Product: " + product.name + "\n" +
        "Quantity: " + checkoutOrder.quantity + "\n" +
        "Subtotal: ₹" + checkoutTotal() + "\n\n" +
        "Customer: " + customer.name + "\n" +
        "Mobile: " + customer.phone + "\n" +
        "Delivery Address: " + checkoutAddressText(customer) + "\n\n" +
        "I have made / am confirming my payment. " +
        "Please verify the payment and confirm my order.\n\n" +
        "Thank you!";

    openWhatsApp(message);
}

function closeCheckout() {
    const modal = document.getElementById("checkout-modal");

    if (modal) modal.style.display = "none";

    checkoutOrder = null;
}







async function verifyIndiaPincode(pin, selectedState) {
    const response = await fetch(
        `https://api.postalpincode.in/pincode/${encodeURIComponent(pin)}`
    );

    if (!response.ok) {
        throw new Error("PIN code service unavailable.");
    }

    const data = await response.json();
    const result = data?.[0];

    if (
        result?.Status !== "Success" ||
        !result.PostOffice?.length
    ) {
        return { valid: false, stateMatch: false };
    }

    const normalize = value =>
        String(value).trim().toLowerCase().replace(/\s+/g, " ");

    const states = [
        ...new Set(result.PostOffice.map(place => place.State))
    ];

    return {
        valid: true,
        stateMatch: states.some(
            state => normalize(state) === normalize(selectedState)
        ),
        areas: result.PostOffice.map(place => place.Name),
        states
    };
}