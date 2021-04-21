class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      "gameState": state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
  question.hide();
  background("yellow")
 fill("black")
 textSize(40)
   text("Result of the Quiz",250,100)
   
   Contestant.getPlayerInfo();
 
   


  if (allContestants!==undefined){

  fill("red")
  var y = 200
  }

    for(var i in allContestants){

      var correctAns = "2"

      y=y+50
      
      if(correctAns===allContestants[i].answer){
      fill("green")
     
      }
      else {
        fill("red")
        
      }
      
      textSize(30)
      
      text(allContestants[i].name + ":" + allContestants[i].answer,250,y)
    } 
    
     
  

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
