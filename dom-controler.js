var selectElementById = function(id){

    if(typeof id !== 'string') throw "Invalid id!";
    var element = document.getElementById(id);
    if(element===null) throw "Element with id: "+id+" does not exist!";
    return element;
}

var addElementToParentWithId = function(element, parentId){
    if(typeof parentId !== 'string') throw "Invalid parentId id!";
    if(element=== null) throw "Trying to add invalid element!";
    var parent = selectElementById(parentId);
    parent.appendChild(element);
}

var deleteElementById = function(id){
    if(typeof id !== 'string') throw "Invalid id!";
    var elementToDelete = selectElementById(id);
    elementToDelete.parentNode.removeChild(elementToDelete);
}