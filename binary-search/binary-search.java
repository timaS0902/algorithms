class Solution {
    public int search(int[] nums, int target) {
        
        int answer = Arrays.binarySearch(nums,target);
        if (answer < 0)  
            return -1; 
        else  
            return answer;
        
        /*
        
        | BINARY SEARCH USING ALGORITHM |
        
        int middle, first = 0;
        int last = nums.length - 1;
        while(first<=last)
        {
            middle = first + (last - 1)/2;
            if (nums[middle] == target)
            {
                return middle;
            }
            if (nums[middle] < target)
            {
                first = middle + 1;
            }
            else
            {
                last = middle - 1;
            }
        }
        return -1;
        */
    }
}
