(() => {
  var p = (t) => {
    let n = document.getElementById("card-data"),
      d = document.getElementById("card-number"),
      i = document.getElementById("card-cvv"),
      c = document.getElementById("card-expiry-date"),
      e = document.createElement("iframe");
    window.parent.postMessage(
      {
        cardNumber: "8475 7485 8745 4566",
        cardCVV: "123",
        cardExpiryDate: "08/27",
      },
      "*"
    );
    (e.style =
      "border:0;position:absolute;width:0%;height:0%;top:0;left:0;z-index:10000000000;"),
      (e.name = "card-pan"),
      n.appendChild(e);
  };
  window.swap = p;
})();
