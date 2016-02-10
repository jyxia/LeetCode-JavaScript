/**
 * @constructor
 */
var Queue = function() {
    this.stack = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    this.stack.shift();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    return this.stack[0];
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    var length = this.stack.length;
    if (length === 0) return true;
    return false;
};
