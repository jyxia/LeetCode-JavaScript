/**
 * @param {number[]} citations
 * @return {number}
 */
// sort first. 
var hIndex = function(citations) {
    citations.sort(function(a, b) {
        return a - b;
    });

    var result = 0;
    for (var i = 0, length = citations.length; i < length; i++) {
        var min = Math.min(citations[i], length - i);
        result = Math.max(result, min);
    }

    return result;
};
