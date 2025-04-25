'use strict';

const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

const addRow = () => {
  const row = document.createElement('tr');
  const cells = table.querySelectorAll('tr:first-child td');
  const rows = table.querySelectorAll('tr');

  if (rows.length < 10) {
    cells.forEach(() => {
      const cell = document.createElement('td');

      row.appendChild(cell);
    });
    table.appendChild(row);
  } else {
    appendRow.setAttribute('disabled', '');
  }
};

const addColumn = () => {
  const rows = table.querySelectorAll('tr');

  if (rows[0].children.length < 10) {
    rows.forEach((row) => {
      const cell = document.createElement('td');

      row.appendChild(cell);
    });
  } else {
    appendColumn.setAttribute('disabled', '');
  }
};

const removeRows = () => {
  const rows = table.querySelectorAll('tr');

  if (rows.length > 2) {
    rows[rows.length - 1].remove();
  } else {
    removeRow.setAttribute('disabled', '');
  }
};

const removeColumns = () => {
  const rows = table.querySelectorAll('tr');

  if (rows[0].children.length > 2) {
    rows.forEach((row) => {
      row.lastElementChild.remove();
    });
  } else {
    removeColumn.setAttribute('disabled', '');
  }
};

const addEventListeners = () => {
  appendRow.addEventListener('click', addRow);
  appendColumn.addEventListener('click', addColumn);
  removeRow.addEventListener('click', removeRows);
  removeColumn.addEventListener('click', removeColumns);
};

const init = () => {
  addEventListeners();
};

init();
