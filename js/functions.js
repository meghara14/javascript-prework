var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} else {
  computerMove = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to:' + randomNumber);
if (randomNumber == '2') {
  computerMove = 'papier';
} else {
  computerMove = 'nieznany ruch';
}
printMessage('Mój ruch:' + computerMove);
randomNumber = Math.round(Math.random() * 3 + 1);
console.log('wylosowana liczba to:' + randomNumber);
if (randomNumber == '3') {
  computerMove = 'nożyce';
} else {
  computerMove = 'nieznany ruch';
}
printMessage('Mój ruch:' + computerMove);
Step JavaScript
Run JavaScript

var playerInput, playerMove;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamień';
} else {
  playerMove = 'nieznany ruch';
}
printMessage('Twój ruch: ' + playerMove);
if (playerInput == '2') {
  playerMove = 'papier';
} else {
  playerMove = 'nieznany ruch';
}
printMessage('Twój ruch' + playerMove);
if (playerInput == '3') {
  playerMove = 'nożyczki';
} else {
  playerMove = 'nieznany ruch';
}