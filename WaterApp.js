
var sceneEl = document.querySelector('a-scene');

//create the text entity
var entityEl = document.createElement('a-entity');
entityEl.setAttribute('text', 'value:hello; align: center; height:4; width:4;');
sceneEl.appendChild(entityEl);
