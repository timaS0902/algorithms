/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    
    let begin = 0;
    let end = nums.length - 1;
    let middle;
    
    while(begin <= end)
    {
        middle = Math.floor((begin+end)/2);
        if(nums[middle] < target)
        {
            begin = middle + 1;       
        }
        else if(nums[middle] > target)
        {
            end = middle - 1;            
        }
        else
        {
            return middle;
        }
    }
    return end+1;
};