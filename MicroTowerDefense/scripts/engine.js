var MGF = MGF || {};
var MTD = MTD || {};

MTD.ROAD_BLOCK = function(){
    MGF.GAME_OBJECT.call(this);
    MGF.appendDebugDiv('New RAOD_BLOCK with id: ' + 
            MGF.OBJECTS_STASH[this.id].id);
};

MTD.ROAD_BLOCK.prototype = Object.create(MGF.GAME_OBJECT.prototype);
MTD.ROAD_BLOCK.prototype.constructor = MTD.ROAD_BLOCK;

MTD.ROAD_BLOCK.prototype.getElementsAsHTML = function(){
    MGF.appendDebugDiv("elementid : " + this.id + " : " + MGF.getIdforHtmlOBject(this.id));
    
   return this.createHTMLElement('div','RoadBlock','');
};

MTD.ROAD_BLOCK.prototype.onClickAction = function(){
    MGF.appendDebugDiv("clicked " + this.id );
};


//------------------------------------------------------------------------------
MTD.RoadLine = {};



MTD.CreateRoad = function(size){
    for (var i =0; i<size; i++){
        MTD.RoadLine[i] = new MTD.ROAD_BLOCK();
        document.getElementById('ROAD').innerHTML = document.getElementById('ROAD').innerHTML + MTD.RoadLine[i].getElementsAsHTML();
    }
};