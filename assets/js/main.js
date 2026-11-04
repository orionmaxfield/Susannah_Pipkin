/* Small, dependency-free behaviours: mobile nav, link filling from config, year. */
(function () {
  var cfg = window.SITE || {};

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Fill show-level links from config: <a data-link="spotify">
  document.querySelectorAll("[data-link]").forEach(function (a) {
    var key = a.getAttribute("data-link");
    var url = cfg[key];
    if (url) {
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener";
      a.classList.remove("is-soon");
      a.removeAttribute("aria-disabled");
    } else if (!a.getAttribute("href") || a.getAttribute("href") === "#") {
      a.classList.add("is-soon");
      a.setAttribute("aria-disabled", "true");
      a.addEventListener("click", function (e) { e.preventDefault(); });
    }
  });

  // Email links: <a data-email>
  document.querySelectorAll("[data-email]").forEach(function (a) {
    if (cfg.email) { a.href = "mailto:" + cfg.email; a.textContent = a.textContent.trim() || cfg.email; }
  });

  // Form endpoints: <form data-form="newsletterAction">
  document.querySelectorAll("form[data-form]").forEach(function (f) {
    var key = f.getAttribute("data-form");
    var action = cfg[key];
    var notice = f.querySelector(".form-unconfigured");
    if (action) {
      f.action = action;
      if (notice) notice.hidden = true;
      // FormSubmit extras for the newsletter: subject line, tidy email, thank-you page, spam trap
      if (key === "newsletterAction" && action.indexOf("formsubmit.co") !== -1) {
        var extras = {
          _subject: "New newsletter signup (latterdaysex.net)",
          _template: "table",
          _next: location.origin + "/subscribed.html",
          _captcha: "false"
        };
        Object.keys(extras).forEach(function (name) {
          if (!f.querySelector('[name="' + name + '"]')) {
            var i = document.createElement("input");
            i.type = "hidden"; i.name = name; i.value = extras[name];
            f.appendChild(i);
          }
        });
        if (!f.querySelector('[name="_honey"]')) {
          var h = document.createElement("input");
          h.type = "text"; h.name = "_honey"; h.tabIndex = -1; h.autocomplete = "off";
          h.setAttribute("aria-hidden", "true"); h.style.cssText = "position:absolute;left:-9999px";
          f.appendChild(h);
        }
      }
    } else {
      f.addEventListener("submit", function (e) {
        e.preventDefault();
        if (notice) notice.hidden = false;
      });
    }
  });

  // Hide social icons that aren't configured
  document.querySelectorAll("[data-social]").forEach(function (a) {
    var url = cfg[a.getAttribute("data-social")];
    if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener"; a.hidden = false; } else { a.hidden = true; }
  });

  // Footer year
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
