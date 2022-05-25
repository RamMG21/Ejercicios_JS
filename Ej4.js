function find_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
    for (let num of nums) {
    if (num > max_num) {
         nums += 1;
    }
    }
      return max_num;
     }