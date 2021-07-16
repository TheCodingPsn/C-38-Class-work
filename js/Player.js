class Player{
    constructor(){
        this.name = null;
        this.index = null;
        this.distance = 0;

    }


    //update playercount to the database
    updatePlayerCount(count){
        database.ref('/').update({

            playerCount : count

        });

    }


    //read playercount from database
    getPlayerCount(){
        var playerCountRef = database.ref('playerCount') ;
        playerCountRef.on("value", function(data){

            myPlayerCount = data.val();

        });

    }

    //update playername/or player details to the database
    update(){
            
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance

        });
        }

    //a function to get all player details
     static getAllPlayersInfo(){
         
        var playersInfoRef = database.ref('players');
        playersInfoRef.on("value" , (data)=>{

            allPlayersInfo = data.val();

        });

            
    }







}

//player - name , distance , index