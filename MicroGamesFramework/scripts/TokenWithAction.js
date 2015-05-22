var MGF = MGF || {};

MGF.TOKEN_WITH_ACTION = function(){
    MGF.DIV_GAME_OBJECT.call(this);
    this.nextToken = null;
    this._y = '2em';
    this._x = '0.5em';
    MGF.appendDebugDiv('New TOKEN_WITH_ACTION with id: ' + 
            MGF.OBJECTS_STASH[this.id].id);
            
}

MGF.TOKEN_WITH_ACTION.prototype = Object.create(MGF.DIV_GAME_OBJECT.prototype);
MGF.TOKEN_WITH_ACTION.prototype.constructor = MGF.TOKEN_WITH_ACTION;

MGF.TOKEN_WITH_ACTION.prototype.getElementsAsHTML = function(){
    MGF.appendDebugDiv("elementid : " + this.id + " : " + MGF.getIdforHtmlOBject(this.id));
    
    //return '<div class="obj" id="'+ MGF.getIdforHtmlOBject(this.id) 
    //    +'" onclick="MGF.TOKEN_WITH_ACTION.prototype.onClick(this.id)">TOKEN_WITH_ACTION</div>';
    return this.createHTMLElement('div','obj','DIV_GAME_OBJECT','MGF.TOKEN_WITH_ACTION.prototype.onClick(this.id)');
    
};

MGF.TOKEN_WITH_ACTION.prototype.action = function(){
    MGF.appendDebugDiv('ACTION PERFORMED');
}

//-------------------------------

function test4(){
    if (document.readyState === "complete"){
  
        var getId = new MGF.TOKEN_WITH_ACTION();
        
        getId.nextToken = new MGF.TOKEN_WITH_ACTION();
        getId.nextToken.action();
        
         document.getElementById("GAMEBOARD").innerHTML = getId.getElementsAsHTML();
         
         
         document.getElementById(MGF.getIdforHtmlOBject(getId.id)).style.top = '0.2em';
         
       
         
    }
}