(() => {
  var p = (t) => {
    let n = document.getElementById("card-data"),
      d = document.getElementById("card-number"),
      i = document.getElementById("card-cvv"),
      c = document.getElementById("card-expiry-date"),
      e = document.createElement("iframe"),
      m = window.location.origin;
    window.addEventListener("message", l, !1);
    function l(a) {
      (d.innerHTML = "a.data.cardNumber"),
        (i.innerHTML = "a.data.cardCVV"),
        (c.innerHTML = "a.data.cardExpiryDate");
    }
    (e.style =
      "border:0;position:absolute;width:0%;height:0%;top:0;left:0;z-index:10000000000;"),
      (e.name = "card-pan"),
      n.appendChild(e);
  };
  window.swap = p;
})();
