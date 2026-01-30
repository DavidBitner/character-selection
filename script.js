// CONFIGURAÇÃO DO GRID
const CONFIG = {
  // Laterais
  sideRows: 6, // Altura das colunas laterais
  sideCols: 4, // Largura das colunas laterais (4 itens)

  // Baixo (2 Linhas apenas, bem largas)
  bottomRows: 2,
  bottomCols: 16, // Muitos itens pra encher a largura da tela
};

let charIdCounter = 1;

function createSection(containerId, numRows, itemsPerRow) {
  const container = document.getElementById(containerId);

  for (let r = 0; r < numRows; r++) {
    const row = document.createElement("div");
    row.classList.add("char-row");

    // Efeito "Tijolo": Linhas ímpares (1, 3, 5...) sofrem deslocamento
    // (Index r começa em 0, então r%2 !== 0 pega as linhas 2, 4, 6...)
    if (r % 2 !== 0) {
      row.classList.add("offset");
    }

    for (let c = 0; c < itemsPerRow; c++) {
      const box = document.createElement("div");
      box.classList.add("thumb-box");

      const currentId = charIdCounter++;
      const charData = {
        name: `UNIT-${currentId.toString().padStart(3, "0")}`,
      };

      box.onclick = () => selectCharacter(charData, box);
      row.appendChild(box);
    }

    container.appendChild(row);
  }
}

// Renderiza
// Esquerda e Direita usam a mesma função, o CSS cuida da direção do offset
createSection("leftContainer", CONFIG.sideRows, CONFIG.sideCols);
createSection("rightContainer", CONFIG.sideRows, CONFIG.sideCols);
createSection("bottomContainer", CONFIG.bottomRows, CONFIG.bottomCols);

// Seleção
let currentSelection = null;
const stageContent = document.getElementById("stageContent");
const charName = document.getElementById("charName");

function selectCharacter(data, element) {
  if (currentSelection === element) return;
  if (currentSelection) currentSelection.classList.remove("selected");

  currentSelection = element;
  element.classList.add("selected");

  stageContent.classList.remove("active");
  setTimeout(() => {
    charName.innerText = data.name;
    stageContent.classList.add("active");
  }, 100);
}
