/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let begin = 0;
    let last = nums.length - 1;
    let middle;
    
    while(begin <= last)
    {
        middle = Math.floor((last+begin)/2);
        if(nums[middle] < target)
        {
            begin = middle + 1;
        }
        else if(nums[middle] > target)
        {
            last = middle - 1;
        }
        else
        {
            return middle;
        }
    }
    return -1;
};