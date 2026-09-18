// ========================================
// CROCHET WEBSITE
// ========================================

// Change this number to your WhatsApp number.
// Country code first, without + or spaces.

const WHATSAPP_NUMBER = "919937867737";


// ========================================
// WHATSAPP LINK
// ========================================

function whatsappUrl(message) {

  return (
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message)
  );

}


// ========================================
// MAIN WHATSAPP BUTTON
// ========================================

const waButton = document.getElementById("waBtn");

if (waButton) {

  waButton.href = whatsappUrl(
    "Hi Thread & Bloom Crochet! 🌸 I would like to know about your crochet products."
  );

}


// ========================================
// CUSTOM ORDER FORM
// ========================================

const orderForm = document.getElementById("orderForm");

if (orderForm) {

  orderForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const data = new FormData(orderForm);

    const name = data.get("name");
    const item = data.get("item");
    const message = data.get("message");


    const whatsappMessage =
`Hi Thread & Bloom Crochet! 🌸

Name: ${name}

Interested in:
${item}

Details:
${message}

Please share the price and availability.

Thank you!`;


    window.open(
      whatsappUrl(whatsappMessage),
      "_blank"
    );

  });

}


// ========================================
// MOBILE MENU
// ========================================

const menuButton = document.querySelector(".menu");
const navigation = document.querySelector(".header nav");

if (menuButton && navigation) {

  menuButton.addEventListener("click", function () {

    if (navigation.style.display === "flex") {

      navigation.style.display = "none";

    } else {

      navigation.style.display = "flex";

      navigation.style.position = "absolute";

      navigation.style.top = "78px";

      navigation.style.left = "0";

      navigation.style.right = "0";

      navigation.style.padding = "20px 6%";

      navigation.style.background = "#fbf6ee";

      navigation.style.flexDirection = "column";

    }

  });

}


// ========================================
// CLOSE MOBILE MENU AFTER CLICK
// ========================================

const navLinks = document.querySelectorAll(".header nav a");

navLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    if (window.innerWidth <= 850) {

      navigation.style.display = "none";

    }

  });

});