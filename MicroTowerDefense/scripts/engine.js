var MGF = MGF || {};
var MTD = MTD || {};

MTD.ROAD_BLOCK = function(onRoadPosition){
    MGF.GAME_OBJECT.call(this);
    MGF.appendDebugDiv('New RAOD_BLOCK with id: ' + 
            MGF.OBJECTS_STASH[this.id].id);
    this.onRoadPosition = onRoadPosition;
};

MTD.ROAD_BLOCK.prototype = Object.create(MGF.GAME_OBJECT.prototype);
MTD.ROAD_BLOCK.prototype.constructor = MTD.ROAD_BLOCK;

MTD.ROAD_BLOCK.prototype.getElementsAsHTML = function(){
    MGF.appendDebugDiv("elementid : " + this.id + " : " + MGF.getIdforHtmlOBject(this.id));
    
   return this.createHTMLElement('div','RoadBlock','');
};

MTD.ROAD_BLOCK.prototype.getElementsAsToken = function(){
    MGF.appendDebugDiv("elementid : " + this.id + " : " + MGF.getIdforHtmlOBject(this.id));
    
   return this.createHTMLElement('div','RoadToken','');
};

MTD.ROAD_BLOCK.prototype.onClickAction = function(){
    MTD.targetRoadPostion  = Math.round( (this.onRoadPosition * 4.6)* 100) / 100;

    MGF.appendDebugDiv('Target : ' + MTD.targetRoadPostion);
    
    myLoop(MTD.TOKEN_ID);
};


//------------------------------------------------------------------------------
MTD.RoadLine = {};

MTD.currentPosition = Math.round((2*4.6) * 100) / 100;
MTD.targetRoadPostion = Math.round((2*4.6) * 100) / 100;

var myLoop = function(id) {       
    

    
   setTimeout(function () {    
      
         
     
      if (MTD.currentPosition < MTD.targetRoadPostion){
          MGF.appendDebugDiv('myLoop smaller' + MTD.currentPosition);
          MTD.currentPosition = Math.round((MTD.currentPosition + 1.15)*100)/100;
      }
      if (MTD.currentPosition > MTD.targetRoadPostion){
          MGF.appendDebugDiv('myLoop bigger' + MTD.currentPosition);
          MTD.currentPosition = Math.round((MTD.currentPosition - 1.15)*100)/100;
      }
  
     MTD.currentPosition = Math.round(MTD.currentPosition * 100) / 100;
     
     
  
      document.getElementById(MGF.getIdforHtmlOBject(id)).style.left = MTD.currentPosition.toString()+'em';
               
      if (MTD.currentPosition!=MTD.targetRoadPostion)  {            
         myLoop(id);              
      }                        
        
       
   }, 24);
};


MTD.CreateRoad = function(size){
    for (var i =0; i<size; i++){
        MTD.RoadLine[i] = new MTD.ROAD_BLOCK(i);
        document.getElementById('ROAD').innerHTML = document.getElementById('ROAD').innerHTML + MTD.RoadLine[i].getElementsAsHTML();
    }
    
    var token = new MTD.ROAD_BLOCK();
    
    MTD.TOKEN_ID = token.id;
    
    document.getElementById('ROAD').innerHTML = document.getElementById('ROAD').innerHTML + token.getElementsAsToken();
    
    
};