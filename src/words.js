import { useState } from 'react';

function Words() {
  const [words] = useState(['chumbles', 'traysure','chortle','meow', 'guffaw', 'splendid','yas','oodja','boodja']);
  const [index,setIndex] = useState(0);

  const showWord = () =>{
    setIndex(Math.floor(Math.random() * Math.floor(words.length)));
  };

  return (
    <div id="words">
      <p>Here is a word: {words[index]}</p>
      <button className='button' onClick={showWord}>Gimme a word</button>
    </div>
  );
}

export default Words;
