/**
 * Solution: BFS
 * use a queue to save candidates from wordList on each level.
 * find next next candiate from the queue.
 *
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 *   Note: wordList is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if (!beginWord) return 0;
    var queue = [beginWord];
    var step = 1;
    wordList.add(endWord);
    while (queue.length > 0) {
        var queueLength = queue.length;
        for (var i = 0; i < queueLength; i++) {
            var word = queue.shift();
            if (word === endWord) return step;
            for (var k = 0; k < word.length; k++) {
                var tmp = word[k];
                for (var j = 97; j <= 122; j++) {
                    if (word.charCodeAt(k) !== j) {
                        charAtK = String.fromCharCode(j);
                        word = word.substring(0, k) + charAtK + word.substring(k + 1);
                        if (wordList.has(word)) {
                            // save the candidate to the queue of this level
                            queue.push(word);
                            // meanwhile, delete this candidate from wordList
                            wordList.delete(word);
                        }
                    }
                }
                // reset word, for next character change
                word = word.substring(0, k) + tmp + word.substring(k + 1);
            }
        }
        step++;
    }

    return 0;
};

// for testing
// var a = 'hit';
// var b = 'cog';
// var set = new Set(["hot","dot","dog","lot","log"]);
// var a = 'a';
// var b = 'c';
// var set = new Set(['a', 'b', 'c']);
// console.log(ladderLength(a, b, set));
