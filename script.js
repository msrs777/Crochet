// ========================================
// THREAD & BLOOM CROCHET
// ========================================

const WHATSAPP_NUMBER = "919937867737";


// ========================================
// WHATSAPP URL
// ========================================

function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}


// ========================================
// HEADER WHATSAPP
// ========================================

const waBtn = document.getElementById("waBtn");

if (waBtn) {
  waBtn.href = whatsappUrl(
    "Hi Thread & Bloom Crochet! 🌸 I would like to know about your handmade crochet products."
  );
}


// ========================================
// HERO WHATSAPP
// ========================================

const heroWhatsApp = document.getElementById("heroWhatsApp");

if (heroWhatsApp) {
  heroWhatsApp.href = whatsappUrl(
    "Hi Thread & Bloom Crochet! 🌸 I am interested in your crochet products. Please share your collection and prices."
  );
}


// ========================================
// CONTACT WHATSAPP
// ========================================

const contactWhatsApp = document.getElementById("contactWhatsApp");

if (contactWhatsApp) {
  contactWhatsApp.href = whatsappUrl(
    "Hi Thread & Bloom Crochet! 🌸 I would like to enquire about your handmade crochet products."
  );
}


// ========================================
// FLOATING WHATSAPP
// ========================================

const floatingWhatsApp =
  document.getElementById("floatingWhatsApp");

if (floatingWhatsApp) {
  floatingWhatsApp.href = whatsappUrl(
    "Hi Thread & Bloom Crochet! 🌸 I would like to place an enquiry."
  );
}


// ========================================
// PRODUCT WHATSAPP BUTTONS
// ========================================

document.querySelectorAll(".product-link").forEach(function (button) {

  button.addEventListener("click", function (event) {

    event.preventDefault();

    const product =
      button.getAttribute("data-product");

    const message =
`Hi Thread & Bloom Crochet! 🌸

I am interested in:
${product}

Please share:
• Available designs
• Price
• Colours
• Delivery details

Thank you!`;

    window.open(
      whatsappUrl(message),
      "_blank"
    );

  });

});


// ========================================
// CUSTOM ORDER FORM
// ========================================

const orderForm =
  document.getElementById("orderForm");

if (orderForm) {

  orderForm.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();

      const data =
        new FormData(orderForm);

      const name =
        data.get("name");

      const item =
        data.get("item");

      const message =
        data.get("message");


      const whatsappMessage =
`Hi Thread & Bloom Crochet! 🌸

I would like to place a custom order.

Name:
${name}

Product:
${item}

My requirements:
${message}

Please let me know the price, available colours and delivery details.

Thank you!`;

      window.open(
        whatsappUrl(whatsappMessage),
        "_blank"
      );

    }
  );

}


// ========================================
// MOBILE MENU
// ========================================

const menuButton =
  document.querySelector(".menu");

const navigation =
  document.querySelector(".header nav");

if (menuButton && navigation) {

  menuButton.addEventListener(
    "click",
    function () {

      if (navigation.style.display === "flex") {

        navigation.style.display = "none";

      } else {

        navigation.style.display = "flex";

      }

    }
  );

}


// ========================================
// MOBILE PRODUCTS DROPDOWN
// ========================================

const dropdown =
  document.querySelector(".dropdown");

const dropdownButton =
  document.querySelector(".drop-btn");

if (dropdown && dropdownButton) {

  dropdownButton.addEventListener(
    "click",
    function (event) {

      if (window.innerWidth <= 850) {

        event.preventDefault();

        dropdown.classList.toggle("open");

      }

    }
  );

}


// ========================================
// CLOSE MOBILE MENU AFTER CLICK
// ========================================

document
  .querySelectorAll(".header nav a")
  .forEach(function (link) {

    link.addEventListener(
      "click",
      function () {

        if (window.innerWidth <= 850) {

          navigation.style.display = "none";

        }

      }
    );

  });


// ========================================
// RESET MENU WHEN SCREEN RESIZES
// ========================================

window.addEventListener(
  "resize",
  function () {

    if (window.innerWidth > 850) {

      navigation.style.display = "flex";

    } else {

      navigation.style.display = "none";

    }

  }
);