document.addEventListener("DOMContentLoaded", function () {
  // accordion item
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  const images = document.querySelectorAll(".accordion-header img");
  images.forEach((img) => {
    img.style.width = "100px";
  });

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const accordionContent = this.querySelector(".accordion-content");
      const img = this.querySelector("img");
      const isVisible =
        window.getComputedStyle(accordionContent).opacity === "1";

      if (isVisible) {
        gsap.to(accordionContent, {
          opacity: 0,
          duration: 2.5,
          ease: "elastic(1, .4)",
        });
        gsap.to(img, {
          width: "100px",
          duration: 2.5,
          ease: "elastic(1, .4)",
        });
      } else {
        document.querySelectorAll(".accordion-content").forEach((content) => {
          gsap.to(content, {
            opacity: 0,
            duration: 2.5,
            ease: "elastic(2, .4)",
          });
        });
        document.querySelectorAll(".accordion-header img").forEach((image) => {
          gsap.to(image, {
            width: "100px",
            duration: 2.5,
            ease: "elastic(2, .4)",
          });
        });
        gsap.to(accordionContent, {
          opacity: 1,
          duration: 2.5,
          ease: "elastic(2, .4)",
        });
        gsap.to(img, {
          width: "600px",
          duration: 2.5,
          ease: "elastic(2, .4)",
        });
      }
    });
  });

  // button
  const button = document.getElementById("getStartedButton");

  button.addEventListener("click", function () {
  // move to Gform
    window.open('https://docs.google.com/forms/u/0/?hl=id');

  });
});
