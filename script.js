let cart = [];

function addToCart(name, price) {

  cart.push({
    name: name,
    price: price
  });

  updateCart();

  openCart();
}


function updateCart() {

  const items = document.getElementById("cartItems");
  const count = document.getElementById("cartCount");
  const total = document.getElementById("cartTotal");

  count.textContent = cart.length;

  items.innerHTML = "";

  let totalPrice = 0;

  cart.forEach((item, index) => {

    totalPrice += item.price;

    items.innerHTML += `
      <div class="cart-item">

        <div>
          <strong>${item.name}</strong>
          <p>$${item.price}</p>
        </div>

        <button
          onclick="removeItem(${index})"
          style="
            background:none;
            border:0;
            color:#a855f7;
            cursor:pointer;
          "
        >
          حذف
        </button>

      </div>
    `;
  });

  total.textContent = totalPrice;
}


function removeItem(index) {

  cart.splice(index, 1);

  updateCart();
}


function openCart() {

  document
    .getElementById("cartOverlay")
    .classList.add("active");
}


function closeCart() {

  document
    .getElementById("cartOverlay")
    .classList.remove("active");
}


function checkout() {

  if (cart.length === 0) {

    alert("السلة فارغة!");

    return;
  }

  let message = "مرحباً NOVAQ 👋%0A%0Aأريد طلب:%0A";

  cart.forEach(item => {

    message += `• ${item.name} - $${item.price}%0A`;

  });

  let total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  message += `%0Aالمجموع: $${total}`;

  window.open(
    "https://wa.me/9647500000000?text=" + message,
    "_blank"
  );
}