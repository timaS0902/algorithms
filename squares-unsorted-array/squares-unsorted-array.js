/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * Example:
 * let nums = [-4,-1,0,3,10]
 */

var sortedSquares = function(nums) {
    
    const square_it = (element) => element ** 2     //square 
    const newArr = nums.map(square_it)              //newArr = [16,1,0,9,100]
    
    newArr.sort((a,b)=>a-b)                         //sort newArr
    
    return newArr;
};