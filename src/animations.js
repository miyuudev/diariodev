document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".petals-hover a");

  links.forEach(link => {
    link.addEventListener("mouseenter", () => {
      for (let i = 0; i < 12; i++) {
        createPetal(link);
      }
    });
  });

    function createPetal(element) {
        const petal = document.createElement("div");
        petal.classList.add("petal");

        const rect = element.getBoundingClientRect();

        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;

        petal.style.left = x + "px";
        petal.style.top = y + "px";

        element.appendChild(petal);

        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 60 + 30;

        const finalX = Math.cos(angle) * distance;
        const finalY = Math.sin(angle) * distance + 30; // leve queda

        petal.animate(
            [
                { transform: "translate(0,0) rotate(0deg)", opacity: 1 },
                { transform: `translate(${finalX}px, ${finalY}px) rotate(360deg)`, opacity: 0 }
            ],
            {
                duration: 2000,
                easing: "cubic-bezier(0.25, 1, 0.5, 1)"
            }

        );

        setTimeout(() => petal.remove(), 1500);
    }
});

