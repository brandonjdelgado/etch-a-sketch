const container = document.querySelector('.container');
let mode;

const clearButton = document.querySelector('#clearButton');
clearButton.addEventListener('click', () => {
  document.querySelectorAll('.row').forEach((row) => {
    Array.from(row.children).forEach((col) => {
      col.style.backgroundColor = bgColor.value;
    }) 
  })
})

const gridSize = document.querySelector('#gridSize');
const gridSizeInput = document.querySelector('#gridSizeInput');
gridSize.textContent = `${gridSizeInput.value} x ${gridSizeInput.value}`

gridSizeInput.addEventListener('input', (e) => {
  gridSize.textContent = `${e.target.value} x ${e.target.value}`
})

gridSizeInput.addEventListener('change', (e) => {
  container.innerHTML = '';
  createGrid(e.target.value);
})

const bgColor = document.querySelector('#bgColor');
bgColor.addEventListener('input', updateBgColor);

function updateBgColor(e) {
  document.querySelectorAll('.row').forEach((row) => {
    Array.from(row.children).forEach((col) => {
      col.style.backgroundColor = e.target.value;
    }) 
  })
}

const penColor = document.querySelector('#penColor');
penColor.addEventListener('change', updatePenColor);

function updatePenColor(e) {
  document.querySelectorAll('.row').forEach((row) => {
    Array.from(row.children).forEach((col) => {
      col.addEventListener('mouseover', () => {
        col.style.backgroundColor = e.target.value;
      })
    })
  })
}

const penModeButton = document.querySelector('#penModeButton');
penModeButton.addEventListener('click', () => {
  document.querySelectorAll('.row').forEach((row) => {
    Array.from(row.children).forEach((col) => {
      col.addEventListener('mouseover', () => {
        col.style.backgroundColor = penColor.value;
        mode = 'pen';
      })
    })
  })
})

const rainbowModeButton = document.querySelector('#rainbowModeButton');
rainbowModeButton.addEventListener('click', () => {
  document.querySelectorAll('.row').forEach((row) => {
    Array.from(row.children).forEach((col) => {
      col.addEventListener('mouseover', () => {
        col.style.backgroundColor = randomRGB();
        mode = 'rainbow';
      })
    })
  })
})

function randomRGB() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  return `rgb(${x}, ${y}, ${z})`;
}

const shadowModeButton = document.querySelector('#shadowModeButton');
shadowModeButton.addEventListener('click', () => {
  document.querySelectorAll('.row').forEach((row) => {
    Array.from(row.children).forEach((col) => {
      col.addEventListener('mouseover', () => {
        col.style.backgroundColor = 'black';
        // darkenColor(col.style.backgroundColor);
        mode = 'shadow';
      })
    })
  })
})

// function darkenColor(color) {
//   console.log(color);
// } 

function createGrid(grid = 16) {
  if (grid <= 100) {
    for (let i = 0; i < grid; i++) {
      const row = document.createElement('div');
      row.classList.add('row');
      for (let i = 0; i < grid; i++) {
        const col = document.createElement('div');
        col.classList.add('col');
        col.style.backgroundColor = bgColor.value;
        if (mode === 'rainbow') {
          col.addEventListener('mouseover', () => col.style.backgroundColor = randomRGB());
        } else if (mode === 'shadow') {
          col.addEventListener('mouseover', () => col.style.backgroundColor = 'black');
        } else if (mode === 'pen') {
          col.addEventListener('mouseover', () => col.style.backgroundColor = penColor.value);
        }
        row.appendChild(col);
      }
      container.appendChild(row);
    }
  } else {
    createGrid();
  }
}
createGrid();

window.addEventListener('load', () => [
  document.querySelectorAll('.row').forEach((row) => {
    Array.from(row.children).forEach((col) => {
      col.addEventListener('mouseover', () => {
        col.style.backgroundColor = penColor.value;
        mode = 'pen';
      })
    })
  })
])