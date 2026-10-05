'use strict';


/* =====================================================
   WHATSAPP
===================================================== */

const WHATSAPP_NUMBER = "919438408070";


/* =====================================================
   PRODUCT DATA
===================================================== */

const products = [

    {
    id: 1,
    name: "Crochet Flower",
    category: "Flowers",
	
    image: "images/hero/crochet-1-hero.jpg",

    images: [
        "images/products/im1.jpeg",
        "images/products/im2.jpeg",
        "images/products/im3.jpeg",
        "images/products/im4.jpeg"
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

        const priceText =
            getPriceText(product);


        const newBadge =
            product.newArrival
                ? `<span class="new-badge">NEW</span>`
                : "";


        container.innerHTML += `

            <article class="product-card">


                <div class="product-image">

    <img
        src="${product.image}"
        alt="${product.name}">

    ${newBadge}

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

                        ${priceText}

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

        "🧶 Hello Sita Art & Craft!\n\n" +

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


        <button
            type="button"
            class="primary-button"
            onclick="orderProduct(${product.id})">

            💬 Order on WhatsApp

        </button>

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

        "🧶 Hello Sita Art & Craft!\n\n" +

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

            "Hello Sita Art & Craft,\n\n" +

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
   AUTOMATIC PRODUCT SLIDER
===================================================== */

let productSliderInterval;


function startProductSlider() {

    const slider =
        document.getElementById(
            "product-container"
        );


    if (!slider) {

        return;

    }


    /* Stop previous timer */

    if (productSliderInterval) {

        clearInterval(
            productSliderInterval
        );

    }


    productSliderInterval =
        setInterval(function () {

            const cards =
                slider.querySelectorAll(
                    ".product-card"
                );


            if (cards.length <= 1) {

                return;

            }


            const firstCard =
                cards[0];


            const cardWidth =
                firstCard.offsetWidth;


            const gap = 24;


            slider.scrollBy({

                left:
                    cardWidth + gap,

                behavior:
                    "smooth"

            });


            /*
             * When reaching the end,
             * smoothly return to the beginning.
             */

            if (
                slider.scrollLeft +
                slider.clientWidth >=
                slider.scrollWidth - 10
            ) {

                setTimeout(function () {

                    slider.scrollTo({

                        left: 0,

                        behavior: "smooth"

                    });

                }, 700);

            }

        }, 3000);

}


/* =====================================================
   START PRODUCT SLIDER AFTER PRODUCTS LOAD
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        setTimeout(function () {

            startProductSlider();

        }, 500);

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