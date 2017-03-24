/**
* question: http://www.programcreek.com/2014/08/leetcode-shortest-word-distance-java/
*
*/

function shortestWordDist(words, word1, word2) {
  var index1, index2;

  return words.reduce(function(dist, word, index) {
    if (word === word1) {
      index1 = index;
    }

    if (word === word2) {
      index2 = index;
    }

    if (index1 >= 0 && index2 >= 0) {
      dist = Math.min(Math.abs(index1 - index2), dist);
    }

    return dist;
  }, Number.MAX_VALUE);
}

// test cases
var words = ["practice", "makes", "perfect", "coding", "makes"];
var word1 = 'practice';
var word2 = 'coding';
var word3 = 'makes';
console.log(shortestWordDist(words, word1, word2));
console.log(shortestWordDist(words, word2, word3));
