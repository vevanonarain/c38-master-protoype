class Game{
    constructor(){
 
    }
    getState(){
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
   }
   update(state){
       database.ref('/').update({
           gameState:state
       })
   }
  async start(){
       if(gameState === 0){
           runner= new Runner();
           var runnerCountRef = await database.ref('runnerCount').once("value");
           if(runnerCountRef.exists()){
              runnerCount = runnerCountRef.val();
              runner.getCount();
           }
           form= new Form();
           form.display();
       }
   }
   play(){
    form.hide();
    textSize(30);
    text("Game Started", 120,100);
    Runner.getRunnerInfo();
    if(runer!==undefined){
      var displayPosition=200;
      for(var runer in runners){
         if(runer==="runner"+runner.index){
             fill("green");
         }else{
           fill("blue");
         }
         displayPosition=displayPosition+20;
         textSize(20);
         text(runners[runer].name + ":" + runners[runer].distance,200,20);
         console.log( text(runners[runer].name + ":" + runners[runer].distance,200,20))
      }
    } 
    if(keyIsDown(UP_ARROW)&&runner.index!==null){
         runner.distance=runner.distance+30;
         runner.update();   
    }
  }
}

 