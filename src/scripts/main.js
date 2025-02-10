'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');
const row = document.querySelectorAll('tr');

let rowCounter = 4;
let columnCounter = 4;

appendRow.addEventListener('click', () => {
  if (rowCounter === 10) {
    appendRow.setAttribute('disabled', true);

    return;
  }

  const newRow = row.cloneNode(true);

  rowCounter++;

  table.insertAdjacentElement('beforeend', newRow);
});

removeRow.addEventListener('click', () => {
  if (rowCounter === 2) {
    removeRow.setAttribute('disabled', true);

    return;
  }

  const deletedRow = table.rows[table.rows.length - 1];

  rowCounter--;

  deletedRow.remove();
});

appendColumn.addEventListener('click', () => {
  if (columnCounter === 10) {
    appendColumn.setAttribute('disabled', true);

    return;
  }

  columnCounter++;

  row.forEach((line) => {
    const newColumn = line.lastElementChild.cloneNode(true);

    line.insertAdjacentElement('beforeend', newColumn);
  });
});

removeColumn.addEventListener('click', () => {
  if (columnCounter === 2) {
    removeColumn.setAttribute('disabled', true);

    return;
  }

  columnCounter--;

  row.forEach((line) => {
    const deletedColumn = line.lastElementChild;

    deletedColumn.remove();
  });
});
