var MGF = MGF || {};
var MTD = MTD || {};

MTD.TOKEN = null;

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
    var targetRoadPostion  = Math.round( (this.onRoadPosition * 4.6)* 100) / 100;

   MTD.TOKEN.move(targetRoadPostion);
};

// -----------------------------------------------------------------------------
MGF.SLIDING_HORIZONTAL_OBJECT = function(onRoadPosition){
    MGF.GAME_OBJECT.call(this);
    MGF.appendDebugDiv('New RAOD_BLOCK with id: ' + 
            MGF.OBJECTS_STASH[this.id].id);
    //this.onRoadPosition = onRoadPosition;
    this.currentPosition = Math.round((2*4.6) * 100) / 100;
    this.targetRoadPostion = Math.round((2*4.6) * 100) / 100;
};

MGF.SLIDING_HORIZONTAL_OBJECT.prototype = Object.create(MGF.GAME_OBJECT.prototype);
MGF.SLIDING_HORIZONTAL_OBJECT.prototype.constructor = MGF.SLIDING_HORIZONTAL_OBJECT;

MGF.SLIDING_HORIZONTAL_OBJECT.prototype.move = function(ntargetRoadPostion){
       
       
       this.targetRoadPostion = ntargetRoadPostion;

       MGF.SLIDING_HORIZONTAL_OBJECT.prototype.innerMove(this.id); 

};

MGF.SLIDING_HORIZONTAL_OBJECT.prototype.innerMove = function(id) {
   
    var objectToMove = MGF.getObjectFromStashWithId(id);
   
      MGF.appendDebugDiv('Target : ' + objectToMove.targetRoadPostion + " Position : " + objectToMove.currentPosition);
  
      if (objectToMove.currentPosition < objectToMove.targetRoadPostion){
          MGF.appendDebugDiv('myLoop smaller' + objectToMove.currentPosition);
          objectToMove.currentPosition = Math.round((objectToMove.currentPosition + 1.15)*100)/100;
      }
      if (objectToMove.currentPosition > objectToMove.targetRoadPostion){
          MGF.appendDebugDiv('myLoop bigger' + MTD.currentPosition);
          objectToMove.currentPosition = Math.round((objectToMove.currentPosition - 1.15)*100)/100;
      }
  
     objectToMove.currentPosition = Math.round(objectToMove.currentPosition * 100) / 100;

     document.getElementById(MGF.getIdforHtmlOBject(objectToMove.id)).style.left = objectToMove.currentPosition.toString()+'em';
           
     if (objectToMove.currentPosition!=objectToMove.targetRoadPostion) {      
     setTimeout(function () {
         MGF.appendDebugDiv('SLIDING_HORIZONTAL_OBJECT.move !');
         MGF.SLIDING_HORIZONTAL_OBJECT.prototype.innerMove(id); 
      }, 24)       
           
     }   

       
   
}

MGF.SLIDING_HORIZONTAL_OBJECT.prototype.getElementsAsHTML = function(){
    MGF.appendDebugDiv("elementid : " + this.id + " : " + MGF.getIdforHtmlOBject(this.id));
    
   return this.createHTMLElement('div','RoadBlock','');
};

MGF.SLIDING_HORIZONTAL_OBJECT.prototype.getElementsAsToken = function(){
    MGF.appendDebugDiv("elementid : " + this.id + " : " + MGF.getIdforHtmlOBject(this.id));
    
   return this.createHTMLElement('div','RoadToken','');
};

//------------------------------------------------------------------------------
MTD.RoadLine = {};

MTD.currentPosition = Math.round((2*4.6) * 100) / 100;
MTD.targetRoadPostion = Math.round((2*4.6) * 100) / 100;


MTD.CreateRoad = function(size){
    for (var i =0; i<size; i++){
        MTD.RoadLine[i] = new MTD.ROAD_BLOCK(i);
        document.getElementById('ROAD').innerHTML = document.getElementById('ROAD').innerHTML + MTD.RoadLine[i].getElementsAsHTML();
    }
    
   MTD.TOKEN = new MGF.SLIDING_HORIZONTAL_OBJECT();
    
    
    
    
    document.getElementById('ROAD').innerHTML = document.getElementById('ROAD').innerHTML + MTD.TOKEN.getElementsAsToken();
    
    
};