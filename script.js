console.log('Hello, World!');
const choices = ['Rock','Paper','Scissors'];

function computerPlay() {
  let result = choices[randomIndex()];
  return result;
}

function randomIndex() {
    let index = Math.floor(Math.random() * choices.length);
    return index;
}
console.log(computerPlay());

