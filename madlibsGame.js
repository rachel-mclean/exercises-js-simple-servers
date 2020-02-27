let fs = require('fs');

let text = fs.readFileSync(chooseSurpriseMadLibs, 'utf-8').split(' ');
let nouns = [];
let verbs = [];
let numbers = [];
let adjectives = [];
let names = [];
let places = [];
let amountOfTime = [];
let pluralNouns = [];
let bodyParts = [];

function playMadLibs() {
  chooseSurpriseMadLibs();
  findIndices(text);
}

function chooseSurpriseMadLibs() {
  let options = fs.readdirSync('./madlibs');
  let randomIndex = Math.floor(Math.random() * 4);
  return options[randomIndex];
}

function findIndices(array) {
  for (let i = 0; i < array.length; i++) {
    if (text[i] === 'noun') {
      // pushes index of 'noun' into nouns array
      nouns.push(i);
    }

    if (text[i] === 'verb') {
      // pushes index of 'verb' into verbs array
      verbs.push(i);
    }

    if (text[i] === 'adjective') {
      // pushes index of 'adjective' into adjectives array
      adjectives.push(i);
    }

    if (text[i] === 'name') {
      // pushes index of 'name' into names array
      names.push(i);
    }

    if (text[i] === 'number') {
      // pushes index of 'number' into numbers array
      numbers.push(i);
    }

    if (text[i] === 'place') {
      // pushes index of 'place' into places array
      places.push(i);
    }

    if (text[i] === 'amountOfTime') {
      // pushes index of 'amountOfTime' into amountOfTime array
      amountOfTime.push(i);
    }

    if (text[i] === 'pluralNoun') {
      // pushes index of 'pluralNoun' into pluralNouns array
      pluralNouns.push(i);
    }

    if (text[i] === 'bodyPart') {
      // pushes index of 'bodyPart' into bodyParts array
      bodyParts.push(i);
    }
  }
}
