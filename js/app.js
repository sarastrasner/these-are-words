'use strict';

let wordArray= [];

function Word (word, status){
  this.word=word;
  this.status=status;
  wordArray.push(this);
}

new Word('oodja boodja', false);
new Word('chumbles', false);
console.log(wordArray);

function renderWord (){
  $('.mainSection').append(wordArray[0]);
}

$(document).ready(function () {
  renderWord();
});

