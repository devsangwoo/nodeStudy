"use strict";
//Object
const obj = {
    company = "Adecco"
}

//function
function isEmptyObj(){
    if(obj.title){
        return true
    } else{
        return false
    }
}

//call for fuction
isEmptyObj();


//ECMA script, new js
const isNewEmptyObj = ()=> obj.title ? true :false
    //iternally operator