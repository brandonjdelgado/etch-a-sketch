const container = document.querySelector('.container');

function createGrid(grid = 16) {
  if (grid <= 100) {
    for (let i = 0; i < grid; i++) {
      const row = document.createElement('div');
      row.classList.add('row');
      for (let i = 0; i < grid; i++) {
        const col = document.createElement('div');
        col.classList.add('col');
        col.addEventListener('mouseover', () => col.classList.add('col-hover'));
        row.appendChild(col);
      }
      container.appendChild(row);
    }
  } else {
    createGrid();
  }
}

createGrid();

// const clearButton = document.querySelector('#clearButton');
// clearButton.addEventListener('click', () => [
// ])

// const gridButton = document.querySelector('#gridButton');
// gridButton.addEventListener('click', () => {
//   const grid = prompt('Enter number from 1-100', 16);
//   if (grid !== null) {
//     container.innerHTML = '';
//     createGrid(grid);
//   }
//   return;
// })