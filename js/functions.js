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
