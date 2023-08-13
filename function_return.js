/*
Title: Assignment Ans Script: Module-03
Description: (2)Javascript function return
Author: SHAHIDUL ISLAM
Date: 13 Aug 23
*/
//Javascript function return
function findMaxNumber(arr){
if(arr.length == 0){
    console.log(null)
}else{
    const maxNum = Math.max.apply(null, arr)
    console.log(maxNum)
    //Others way
    // const sortedArr = arr.sort(function(a,b){return a-b})
    // console.log(sortedArr[sortedArr.length - 1])
}
}
const numbers1 = [10, 20, 5, 30, 25];
const numbers2 = [5, 15, 7];
const emptyArray = [];

findMaxNumber(numbers1)
findMaxNumber(numbers2)
findMaxNumber(emptyArray)
