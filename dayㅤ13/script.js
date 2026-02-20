let divs = document.querySelectorAll('#parent div');

let player1 = '❎';
let player2 = '🅾️';
let turn = 0;

let winningMoves = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

let player1Moves = [];
let player2Moves = [];

function checkWinner(moves) {
    return winningMoves.some(win =>
        win.every(pos => moves.includes(pos))
    );
}

function disableBoard() {
    divs.forEach(div => div.style.pointerEvents = "none");
}

divs.forEach((div, index) => {
    div.addEventListener('click', () => {

        if (div.innerText) return;

        let position = index + 1;

        if (turn === 0) {
            div.innerText = player1;
            player1Moves.push(position);

            if (checkWinner(player1Moves)) {
                alert("❎ Player Wins!");
                disableBoard();
                return;
            }

            turn = 1;
        } 
        else {
            div.innerText = player2;
            player2Moves.push(position);

            if (checkWinner(player2Moves)) {
                alert("🅾️ Player Wins!");
                disableBoard();
                return;
            }

            turn = 0;
        }

        if (player1Moves.length + player2Moves.length === 9) {
            alert("It's a Draw 🤝");
        }
    });
});
