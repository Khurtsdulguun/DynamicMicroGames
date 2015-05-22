//------------GLOBAL DEFINITIONS------------------------------------------------
var MGF = MGF || {}

MGF.DEBUG_ENABLED = MGF.DEBUG_ENABLED || true;
MGF.OBJECTS_STASH = MGF.OBJECTS_STASH || {}
MGF.OBJECTS_STASH_MAXIMUM_SIZE = 100;

//-------------------GAME_OBJECT PROTOTYPE--------------------------------------
MGF.GAME_OBJECT = function(){
    this.id = MGF.putInStash(this);
    MGF.appendDebugDiv('New GAME_OBJECT with id: ' + MGF.OBJECTS_STASH[this.id].id);
}

MGF.GAME_OBJECT.prototype.getFromStashWithHtmlId = function(htmlId){
    return MGF.OBJECTS_STASH[MGF.getStashIdfromHtmlObject(htmlId)];
}

MGF.GAME_OBJECT.prototype.destroy = function(){
    MGF.OBJECTS_STASH[this.id] = null;
}

MGF.GAME_OBJECT.prototype.createHTMLElement = function(tag,classes,body){
    return '<' + tag +' class="'+classes+'" id="'+MGF.getIdforHtmlOBject(this.id)+'" onClick="MGF.clickOnObjectFromStash(this.id)" >'+body+'</' + tag +'>';
}


//-------------------DEBUG LOG--------------------------------------------------
MGF.appendDebugDiv = function(log){
    if(MGF.DEBUG_ENABLED){
        document.getElementById("DEBUG").innerHTML ='INFO - '+ log.concat(' <br> ' + 
        document.getElementById("DEBUG").innerHTML);
    }
}
//------------------------------------------------------------------------------
//--------------------STASH-----------------------------------------------------
MGF.putInStash = function(obj){
    var id = MGF.generateId();
    MGF.OBJECTS_STASH[id] = obj;
    MGF.appendDebugDiv('put object at id = ' + id + " : lenght : "+ MGF.OBJECTS_STASH);
    return id;
}
MGF.removeFromStash = function(id){
    MGF.appendDebugDiv('object to remove = ' + id);
    MGF.OBJECTS_STASH[id] = null;
    return id;
}
MGF.generateId = function(){
    var id;
    do{
         id = Math.floor((Math.random() * MGF.OBJECTS_STASH_MAXIMUM_SIZE) + 1);
    }
    while(MGF.OBJECTS_STASH[id]!=null)
   return id;
}

MGF.getIdforHtmlOBject = function(id){
    return 'inStash_'.concat(id);
}
MGF.getStashIdfromHtmlObject = function(htmlId){
    return parseInt(htmlId.split('_')[1]);
}

MGF.clickOnObjectFromStash = function(elementId){
   MGF.OBJECTS_STASH[MGF.getStashIdfromHtmlObject(elementId)].onClickAction(); 
};

//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
function test(){
    var getId = MGF.putInStash('test');
    var testObj = new MGF.GAME_OBJECT();
    document.getElementById("SANDBOX").innerHTML = testObj.createHTMLElement('div','obj','aaa : '+ testObj.id);
    
}
function test2(id){
    document.getElementById(id).innerHTML = MGF.OBJECTS_STASH[MGF.getStashIdfromHtmlObject(id)];
}