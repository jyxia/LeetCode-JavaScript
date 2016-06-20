/**
 * Solution: use stack
 * Note, stack[stack.length - 3] !== '#' is important. for the case "9, #, #,#,# "
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    var stack = [];
    var i = 0;
    var newStr = preorder.split(',');
    var length = newStr.length;

    while (i < length) {
        stack.push(newStr[i]);
        while (stack.length > 2 && stack[stack.length - 1] === '#' &&
            stack[stack.length - 2] === '#' && stack[stack.length - 3] !== '#') {
            stack.pop();
            stack.pop();
            stack.pop();
            stack.push('#');
        }
        i++;
    }

    if (stack.length === 1 && stack[0] === '#') {
        return true;
    }
    return false;
};


// Testing cases
// "9,3,4,#,#,1,#,#,2,#,6,#,#"
// "1, #, #, #, #"
