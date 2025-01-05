const imageFiles = [
  "assets/bakewell.jpeg",
  "assets/buffet.jpeg",
  "assets/counter.jpeg",
  "assets/filling.jpeg",
  "assets/filling2.jpeg",
  "assets/fishnchips.jpeg",
  "assets/inside1.jpeg",
  "assets/oldmica1.jpeg",
  "assets/oldmica2.jpeg",
  "assets/pie.jpeg",
  "assets/vege.jpeg",
  "assets/WhatsApp Image 2025-01-02 at 21.10.24 (2).jpeg",
  "assets/WhatsApp Image 2025-01-02 at 21.10.24 (3).jpeg",
  "assets/WhatsApp Image 2025-01-02 at 21.10.24 (4).jpeg",
  "assets/WhatsApp Image 2025-01-02 at 21.10.24 (5).jpeg",
  "assets/WhatsApp Image 2025-01-02 at 21.10.24 (6).jpeg",
  "assets/WhatsApp Image 2025-01-02 at 21.10.24 (7).jpeg",
  "assets/WhatsApp Image 2025-01-02 at 21.10.24 (8).jpeg",
  "assets/WhatsApp Image 2025-01-02 at 21.10.24.jpeg",
  "assets/WhatsApp Image 2025-01-02 at 21.13.05.jpeg",
  "assets/WhatsApp Image 2025-01-02 at 21.20.28 (1).jpeg",
  "assets/WhatsApp Image 2025-01-02 at 21.20.28 (3).jpeg",
  "assets/WhatsApp Image 2025-01-02 at 21.20.28 (5).jpeg",
  "assets/WhatsApp Image 2025-01-02 at 21.20.28 (6).jpeg",
  "assets/WhatsApp Image 2025-01-02 at 21.20.28 (7).jpeg",
  "assets/WhatsApp Image 2025-01-02 at 21.20.28.jpeg",
  "assets/WhatsApp Image 2025-01-02 at 21.20.54 (1).jpeg",
  "assets/WhatsApp Image 2025-01-02 at 21.20.54.jpeg",
];

// Divide images into three unique groups
const groupSize = Math.ceil(imageFiles.length / 3);
const sliderGroups = [
  imageFiles.slice(0, groupSize),
  imageFiles.slice(groupSize, groupSize * 2),
  imageFiles.slice(groupSize * 2),
];

// Populate each slider with its unique group of images
const sliders = document.querySelectorAll(".slide-track");

sliders.forEach((slider, index) => {
  const images = sliderGroups[index];
  images.forEach((image) => {
    const img = document.createElement("img");
    img.src = image;
    img.className = "slide-item";
    slider.appendChild(img);
  });

  // Clone images for smooth infinite scrolling
  images.forEach((image) => {
    const img = document.createElement("img");
    img.src = image;
    img.className = "slide-item";
    slider.appendChild(img);
  });

  // Adjust animation for alternating directions
  if (index % 2 === 1) {
    slider.style.animation = `scroll-right 120s linear infinite`;
  } else {
    slider.style.animation = `scroll-left 120s linear infinite`;
  }
});

// Add CSS for left-to-right and right-to-left animations dynamically
const style = document.createElement("style");
style.textContent = `
  @keyframes scroll-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-1 * (250px + 15px + 15px) * ${sliderGroups[0].length}));
    }
  }

  @keyframes scroll-right {
    0% {
      transform: translateX(calc(-1 * (250px + 15px + 15px) * ${sliderGroups[1].length}));
    }
    100% {
      transform: translateX(0);
    }
  }
`;
document.head.appendChild(style);
