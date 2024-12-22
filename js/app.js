document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const totalImages = 28;

  // Define column-to-image mapping
  const columnImageMap = {
    7: 28, // 7 columns -> 28 images
    6: 24, // 6 columns -> 24 images
    5: 25, // 5 columns -> 25 images
    4: 28, // 4 columns -> 28 images
    3: 27, // 3 columns -> 27 images
    2: 28, // 2 columns -> 28 images
  };

  // Function to calculate columns based on screen width
  function calculateColumns() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1200) return 7;
    if (screenWidth >= 992) return 6;
    if (screenWidth >= 768) return 5;
    if (screenWidth >= 576) return 4;
    if (screenWidth >= 400) return 3;
    return 2;
  }

  // Function to render images dynamically
  function renderImages() {
    container.innerHTML = ""; // Clear existing images
    const columns = calculateColumns(); // Determine the number of columns
    const visibleImages = columnImageMap[columns]; // Get the number of images to display

    // Add visible images to the container
    for (let i = 0; i < visibleImages; i++) {
      const img = document.createElement("img");
      img.src = `https://picsum.photos/200?random=${i}`; // Placeholder images
      img.alt = `Image ${i + 1}`;
      container.appendChild(img);
    }
  }

  // Initial render
  renderImages();

  // Re-render images on window resize
  window.addEventListener("resize", renderImages);
});
