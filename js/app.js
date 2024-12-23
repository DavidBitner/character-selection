document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const totalImages = 28;

  // Define column-to-image mapping
  const columnImageMap = {
    7: 28,
    6: 24,
    5: 25,
    4: 28,
    3: 27,
    2: 28,
  };

  function calculateColumns() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) return 7;
    if (screenWidth >= 992) return 6;
    if (screenWidth >= 768) return 5;
    if (screenWidth >= 576) return 4;
    if (screenWidth >= 400) return 3;
    return 2;
  }

  function renderImages() {
    container.innerHTML = "";
    const columns = calculateColumns();
    const visibleImages = columnImageMap[columns];

    for (let i = 0; i < visibleImages; i++) {
      const img = document.createElement("img");
      img.src = `https://picsum.photos/200?random=${i}`;
      img.alt = `Image ${i + 1}`;
      container.appendChild(img);
    }
  }

  renderImages();
  window.addEventListener("resize", renderImages);

  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-content">
        <div class="character-area"></div>
        <div class="content-area">
            <h2>Kaelar of the Shimmering Coast</h2>
            <div class="title">Wanderer of the Ironspire Range</div>
            <p>Born beneath the jagged peaks of the Ironspire Range, a land of perpetual storms and ancient ruins teeming with forgotten relics.</p>
            <p>Kaelar is a cunning and resourceful wanderer who trusts no one but himself. With a sharp tongue and a sharper blade, he thrives on outwitting both friend and foe alike.</p>
            <button class="action-btn">Placeholder Button</button>
        </div>
    </div>
`;

  document.body.appendChild(modal);

  const modalContent = modal.querySelector(".modal-content");
  const closeBtn = modal.querySelector(".close-btn");

  // Open modal on image click
  container.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
      const imgSrc = e.target.src;
      modalContent.style.backgroundImage = `url('${imgSrc}')`;
      modal.classList.add("active");
    }
  });

  // Close modal on button click or outside modal click
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target === closeBtn) {
      modal.classList.remove("active");
    }
  });
});
