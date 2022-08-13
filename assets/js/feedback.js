
  document.querySelectorAll(".feedback-media img").forEach((entry) =>
    entry.addEventListener("click", (e) => {
      if (!entry.classList.contains("active")) {
        document.querySelector(".feedback-media img.active").classList.remove("active");
        entry.classList.add("active");
      }
      e.preventDefault();
    })
  );
