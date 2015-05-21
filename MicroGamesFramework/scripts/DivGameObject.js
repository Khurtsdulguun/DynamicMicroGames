var MGF = MGF || {};

//-------------------DIV RELATED GAME_OBJECT PROTOTYPE--------------------------
MGF.DIV_GAME_OBJECT = function(){
    MGF.GAME_OBJECT.call(this);
    MGF.appendDebugDiv('New DIV_GAME_OBJECT with id: ' + 
            MGF.OBJECTS_STASH[this.id].id);
};

MGF.DIV_GAME_OBJECT.prototype = Object.create(MGF.GAME_OBJECT.prototype);
MGF.DIV_GAME_OBJECT.prototype.constructor = MGF.DIV_GAME_OBJECT;

MGF.DIV_GAME_OBJECT.prototype.getElementsAsHTML = function(){
    MGF.appendDebugDiv("elementid : " + this.id + " : " + MGF.getIdforHtmlOBject(this.id));
    
    return '<div class="obj" id="'+ MGF.getIdforHtmlOBject(this.id) 
        +'" onclick="MGF.DIV_GAME_OBJECT.prototype.onClick(this.id)">DIV_GAME_OBJECT</div>';
};

MGF.DIV_GAME_OBJECT.prototype.onClick = function(elementId){
    MGF.appendDebugDiv("clicked : " + elementId);
    document.getElementById(elementId).innerHTML = "CLICKED";
};

//------------------------------------------------------------------------------

function test3(){
   //var testObj = new MGF.DIV_GAME_OBJECT();
     var getId = new MGF.DIV_GAME_OBJECT();
     document.getElementById("SANDBOX").innerHTML = getId.getElementsAsHTML();
}
