class Solution {
    public int searchInsert(int[] nums, int target) {
        
        int first = 0, middle;
        int last = nums.length -1;
        
        while(first<=last)
        {
            middle = Math.round((first + last)/2);
            if(nums[middle] < target)
            {
                first = middle + 1; 
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
        return last + 1; 
    }
}
