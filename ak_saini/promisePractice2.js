const cart = ["shoes", "pants", "kurtas"];

createOrder(cart)
  .then(function (data) {
    return data.orderId;
  })
  .catch(function (err) {
    console.log("Error:", err);
  })
  .then(function (orderId) {
    return processPayment(orderId);
  })
  .then(function (payment) {
    console.log(payment);
  })
  .catch(function (err) {
    console.log("Error:", err);
  });

function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderId = 12345;
    if (orderId) {
      setTimeout(function () {
        resolve({ orderId, paymentStatus: true });
      }, 5000);
    }
  });
}

function processPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment successful");
  });
}

function validateCart(cart) {
  return false;
}
