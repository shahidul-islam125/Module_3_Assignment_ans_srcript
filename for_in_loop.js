/*
Title: Assignment Ans Script: Module-03
Description: (1)Javascript for in loop
Author: SHAHIDUL ISLAM
Date: 13 Aug 23
*/
//Javascript for in loop
function printObjectProperties(obj){
    if(Object.keys(obj).length == 0){
        console.log("Object is empty")
    }else{
        for(let property in obj){
            console.log(`"${property}: ${obj[property]}"`)
        }
    }
}

const simpleObj = {
    fName: "Shahidul",
    lName: "Islam",
    age: 24,
    prof: "React developer"
}
printObjectProperties(simpleObj)
