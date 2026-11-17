(function () {
  "use strict";

  var WA_NUMBER = "393382274066";
  var SMS_NUMBER = "+393382274066";
  document.documentElement.classList.add("js");

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
      toggle.textContent = open ? "Menu" : "Chiudi";
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
        toggle.textContent = "Menu";
      });
    });
  }

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var nodes = document.querySelectorAll(".on-scroll");
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      nodes.forEach(function (el) { io.observe(el); });
    } else {
      nodes.forEach(function (el) { el.classList.add("is-in"); });
    }
  } else {
    document.querySelectorAll(".on-scroll").forEach(function (el) {
      el.classList.add("is-in");
    });
  }

  function isIOS() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  function gather() {
    var form = document.getElementById("contatto-form");
    if (!form) return "";
    var nome = (form.nome.value || "").trim();
    var zona = (form.zona.value || "").trim();
    var lavoro = (form.lavoro.value || "").trim();
    var messaggio = (form.messaggio.value || "").trim();
    var parts = ["Buongiorno, vi contatto dal sito Intelligenza Artigianale."];
    if (nome) parts.push("Sono " + nome + ".");
    if (zona) parts.push("Zona: " + zona + ".");
    if (lavoro) parts.push("Lavoro richiesto: " + lavoro + ".");
    if (messaggio) parts.push(messaggio);
    else parts.push("Vorrei un sopralluogo gratuito e un preventivo.");
    return parts.join(" ");
  }

  function openWhatsApp(text) {
    var url = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text);
    window.open(url, "_blank", "noopener");
  }

  function openSms(text) {
    var href = isIOS()
      ? "sms:" + SMS_NUMBER + "&body=" + encodeURIComponent(text)
      : "sms:" + SMS_NUMBER + "?body=" + encodeURIComponent(text);
    window.location.href = href;
  }

  var form = document.getElementById("contatto-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      openWhatsApp(gather());
    });
    var smsBtn = document.getElementById("invia-sms");
    if (smsBtn) {
      smsBtn.addEventListener("click", function () {
        if (typeof form.reportValidity === "function" && !form.reportValidity()) return;
        openSms(gather());
      });
    }
  }
})();
