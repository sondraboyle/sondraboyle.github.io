
var kanji = document.querySelector('#kanji');
var hiro = document.querySelector('#hiro');
let date1 = new Date(2021, 11, 7, 9, 0, 0, 0); //original date watered
let now = new Date(); //the current time

var timeDiff = now - date1; //in ms
// strip the ms
timeDiff /= 1000;
//change to seconds
var seconds = Math.round(timeDiff);
//change to hours
var hours = Math.round(seconds /60 /60);


function Rosemary(){ //kanji marker
    if(hours >= 24){
        return "Water Me!"}
    else{
        return `Next Watering: ${24-hours} hours`
    }  
}

function largePlant(){ //hiro marker
    if(hours >= 96){
        return "Water Me!"}
    else if (hours > 24 && hours <96){
        return `Next Watering: ${24-hours} hours`
    }  
    else{
        return `Next Watering: ${Math.round((96-hours)/24)} days`   
    }
}

function leafyPlant(){ //custom marker
    if(hours >= 48){
        return "Water Me!"}
    else if (hours >= 24 && hours <=48){
        return `Water me tomorrow`
    }  
    else {
        return `Next Watering: ${48-hours} hours`
    }
}



//create the text entity - kanji
var entityEl = document.createElement('a-entity');
entityEl.setAttribute('text', `value:${Rosemary()}; align: center; height:4; width:4;`);
kanji.appendChild(entityEl);

//create the text entity - hiro
var entityTwo = document.createElement('a-entity');
entityTwo.setAttribute('text', `value:${largePlant()}; align: center; height:4; width:4;`);
hiro.appendChild(entityTwo);
