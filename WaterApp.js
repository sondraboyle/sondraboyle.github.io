
var markerEl = document.querySelector('#kanji');
var markerTwo = document.querySelector('#hiro');

//create the text entity
var entityEl = document.createElement('a-entity');
entityEl.setAttribute('text', 'value:hello; align: center; height:4; width:4;');
markerEl.appendChild(entityEl);

var entityTwo = document.createElement('a-entity');
entityTwo.setAttribute('text', 'value:goodbye; align: center; height:4; width:4;');
markerTwo.appendChild(entityTwo);


console.log(entityEl);