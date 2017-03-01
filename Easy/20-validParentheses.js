/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        }

        if (s[i] === ')') {
            if (stack[stack.length - 1] !== '(') return false;
            else stack.pop()
        }

        if (s[i] === ']') {
            if (stack[stack.length - 1] !== '[') return false;
            else stack.pop();
        }

        if (s[i] === '}') {
            if (stack[stack.length - 1] !== '{') return false;
            else stack.pop();
        }
    }

    return stack.length === 0;
};

// second try
var isValid = function(s) {
    var stack = [];

    s.split('').forEach(function(char) {
       if (char === '(' || char === '{' || char === '[') {
           stack.push(char);
       }

       if (char === ')') {
           if (stack.length > 0 && stack[stack.length - 1] === '(') {
               stack.pop();
           } else {
               stack.push(char);
           }
       }

       if (char === ']') {
           if (stack.length > 0 && stack[stack.length - 1] === '[') {
               stack.pop();
           } else {
               stack.push(char);
           }
       }

       if (char === '}') {
           if (stack.length > 0 && stack[stack.length - 1] === '{') {
               stack.pop();
           } else {
               stack.push(char);
           }
       }
    });

    return stack.length === 0;
};
