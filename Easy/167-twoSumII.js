/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var left = 0;
    var right = numbers.length - 1;
    var results = [];

    while (left < right) {
        if (numbers[left] + numbers[right] === target) {
            results.push(left + 1, right + 1);
            break;
        } else if (numbers[left] + numbers[right] < target) {
            left += 1;
        } else {
            right -= 1;
        }
    }

    return results;
};
