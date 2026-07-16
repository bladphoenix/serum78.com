/* =====================================================================
   SERUM78 — Interactions
   ===================================================================== */
(function () {
  "use strict";

  var WA_NUMBER = "6281234567890"; // Ganti dengan nomor WhatsApp resmi kamu

  /* ---------- Sticky header shadow ---------- */
  var header = document.querySelector(".header");
  function onScroll() {
    if (window.scrollY > 12) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
    });
    // Close menu when a link is clicked
    navLinks.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- FAQ accordion ---------- */
  var faqItems = document.querySelectorAll(".faq__item");
  faqItems.forEach(function (item) {
    var btn = item.querySelector(".faq__q");
    var ans = item.querySelector(".faq__a");
    btn.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");
      // Close all
      faqItems.forEach(function (other) {
        other.classList.remove("open");
        other.querySelector(".faq__a").style.maxHeight = null;
        other.querySelector(".faq__q").setAttribute("aria-expanded", "false");
      });
      // Open clicked (if it was closed)
      if (!isOpen) {
        item.classList.add("open");
        ans.style.maxHeight = ans.scrollHeight + "px";
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---------- WhatsApp order form ---------- */
  var form = document.getElementById("orderForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nama = (document.getElementById("nama").value || "").trim();
      var varian = document.getElementById("varian").value;
      var pesan = (document.getElementById("pesan").value || "").trim();
      var text = "Halo Serum78! 👋\n\nSaya *" + (nama || "(tanpa nama)") +
        "* mau pesan / konsultasi.\n\nVarian: *" + varian + "*";
      if (pesan) text += "\nKondisi kulit: " + pesan;
      text += "\n\nBoleh dibantu info lengkapnya? Terima kasih 🌸";
      var url = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text);
      window.open(url, "_blank", "noopener");
    });
  }

  /* ---------- Dynamic year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
