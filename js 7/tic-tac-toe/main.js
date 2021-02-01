const equals3 = (a, b, c) => {
  return (a == b && b == c && a != '');
}

const equals4 = (a, b, c, f, g, h, r, t, p) => {
  return (a && b && c && f && g && h && r && t && p != '');
}

const checkWinner = (model) => {
  let winner = null;

  // horizontal
  for (let i = 0; i < 3; i++) {
    if (equals3(model[i][0], model[i][1], model[i][2])) {
      winner = model[i][0];
    }
  }  

  // vertical
  for (let i = 0; i < 3; i++) {
    if (equals3(model[0][i], model[1][i], model[2][i])) {
      winner = model[0][i];
    }
  }

  // diagonal
  if (equals3(model[0][0], model[1][1], model[2][2])) {
    winner = model[0][0];
  }
  if (equals3(model[0][2], model[1][1], model[2][0])) {
    winner = model[0][2];
  }
  // tie
  if (equals4(model[0][0], model[0][1], model[0][2], model[1][0], model[1][1], model[1][2], model[2][0], model[2][1], model[2][2])) {
    winner = "tie";
  }

  return winner;
}

const game = () => {
  const model = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  const playerX = 'X';
  const playerO = 'O';
  let currentPlayer = playerX;

  const $game = document.querySelector('#game');
  const $table = document.createElement('table');

  for (let i = 0; i < 3; i++) {
    const $tr = document.createElement('tr');
    $tr.dataset.index = i;

    for (let j = 0; j < 3; j++) {
      const $td = document.createElement('td');
      $td.dataset.index = j;
      $tr.appendChild($td);
    }

    $table.appendChild($tr);
  }

  $game.appendChild($table);

  $table.addEventListener('click', (e) => {
    const row = e.target.parentNode.dataset.index;
    const column = e.target.dataset.index;

    // 2. check if td assigned
    if (e.srcElement.innerText === "") {
      model[row][column] = currentPlayer;
      e.target.innerHTML = currentPlayer;
      
      currentPlayer = currentPlayer === playerX ? playerO : playerX;

      const winner = checkWinner(model);
      if (winner) {
        alert(`Winner: ${winner}`);
      }
    }
  });
}

window.onload = () => {
  game();
};
