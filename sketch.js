var database;
var position;

var game, player, form;

var mygameState=0, myPlayerCount;


var allPlayersInfo;//this is an array to store players info


function setup(){

  database = firebase.database();
  console.log(database);


  createCanvas(500,500);

  
  game = new Game();
  game.start();

  
}

function draw(){
  
  background("white");

  if(myPlayerCount === 4){
    game.updateGameState(1);
  }

  if(mygameState === 1){
    clear();
    game.play();
  }
  
}

