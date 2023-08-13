/*
Title: Assignment Ans Script: Module-03
Description: (3)Javascript Spread Operator
Author: SHAHIDUL ISLAM
Date: 13 Aug 23
*/

function mergeArrays(input1, input2){
const mergeArray = [...input1, ...input2]
console.log(mergeArray)
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

mergeArrays(arr1, arr2)
