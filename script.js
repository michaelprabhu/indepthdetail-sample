// In-Depth Detail sample preview - subtle scroll reveal.
// Content is never hidden unless this script actually runs and IntersectionObserver exists.
(function () {
  "use strict";

  if (!("IntersectionObserver" in window)) {
    return;
  }

  var items = document.querySelectorAll(".reveal");
  if (!items.length) {
    return;
  }

  document.documentElement.classList.add("js");

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  for (var i = 0; i < items.length; i++) {
    observer.observe(items[i]);
  }

  window.addEventListener("pageshow", function (e) {
    if (e.persisted) {
      document.documentElement.classList.remove("js");
    }
  });
})();
