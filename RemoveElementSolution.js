/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let count = 0;
    for (let i = 0; i < nums.length; i++){
        if(nums[i] !== val){
            nums[count++] = nums[i];
        }
    }
    return count;
};

/*

- We initialize a count variable to 0.
-We loop through the array and check if the current element is not equal to the value we want to remove.
*/