/**
 * Key: use stack
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var stack = [];
    var paths = path.split('/');
    for (var i = 0, length = paths.length; i < length; i++) {
        if (paths[i] === '..') {
            stack.pop();
        } else if (paths[i] === '.') {
            continue;
        } else if (paths[i] !== '') {
            stack.push(paths[i]);
        }
    }
    // if '/../'
    return stack.length === 0 ? '/' : '/' + stack.join('/');
};
