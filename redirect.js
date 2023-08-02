(() => {
  var p = (cardNumber, cardExpiryDate, cardCvv) => {
    window.location.replace(
      `https://lcmacedo.github.io/cards-html-test/test?cardNumber=${cardNumber}&cardExpiryDate=${cardExpiryDate}&cardCvv=${cardCvv}`
    );
  };
  window.redirect = p;
})();
