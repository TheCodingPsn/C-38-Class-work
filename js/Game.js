class Game{

         constructor(){

    }

        //we will get the gamestate from state
        getGameState(){
            var gameStateRef = database.ref('gameState') ;
            gameStateRef.on("value", function(data){

                mygameState = data.val();

            });
        

        }

        //we will write to database    
        updateGameState(state){

            database.ref('/').update({

            gameState : state

        });

    }

    async start(){

        //initially as gamestate is 0, we will create form and player objects
        if(mygameState === 0){
       
            player = new Player();

            //NaN
            var playerCountRef = await database.ref('playerCount').once("value");
                if(playerCountRef.exists()){

                    myPlayerCount = playerCountRef.val();
                    player.getPlayerCount();
                }

            form = new Form();//this calls the constructor of the Form class
            form.display();
        
        }
    
    }

    //the game should start when we have 4 players registered
    play(){

        form.hide();

        text("Game Start", 300,150);
        //we need to get  info reg all the players registered
        Player.getAllPlayersInfo(); [bob ,john ,ryan,alex]

        //we will use this info to highlight the current 
        if(allPlayersInfo !== undefined) {

            pos = 130;
            
            //iterate thorough each player in the allPlayersINfo array and higlight the current one
            for(plr in allPlayersInfo){

            if(plr === "player" + player.index)//1 2 3 4
               fill("red");
               else

               fill("black");

               pos= pos + 50;
               text(allPlayersInfo[plr].name + "" + allPlayersInfo[plr].distance,120, pos);
            }
        } 
        
        //if UP arrow is pressed, player distance shold be increased
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.update();
        }


    }
    
}



//sketch - control the game
//structured - form player and game