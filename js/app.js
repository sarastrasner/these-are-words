'use strict';

let wordArray= [];
let uniqueWordArray = [];

function Word (word, status){
  this.word=word;
  this.status=status;
  wordArray.push(this);
}

new Word('oodja boodja', false);
new Word('chumbles', false);
new Word('smidge', true);

function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomWord(){
  var randomWord = getRandomNumber(wordArray.length);
  while(uniqueWordArray.includes(randomWord)){
    randomWord = getRandomNumber(wordArray.length);
  }
  uniqueWordArray.push(randomWord);

  if(uniqueWordArray.length > 6){
    uniqueWordArray.shift();
  }
  console.log(wordArray[randomWord].word);
  $('.mainSection').append(wordArray[randomWord].word);

}

getRandomWord();

