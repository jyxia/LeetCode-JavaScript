/**
* question: http://www.programcreek.com/2014/08/leetcode-shortest-word-distance-iii/
*
*/

function shortestWordDist(words, word1, word2) {
  var index1 = -1;
  var index2 = -1;
  var dist = Number.MAX_VALUE; // for some reason in JavaScript, manually set max.

  words.forEach(function(word, index) {
    if (word1 === word2) {
      if (word1 === word) {
        if (index1 > index2) {
          index2 = index;
        } else {
          index1 = index;
        }
      }
    } else {
      if (word === word1) {
        index1 = index;
      }

      if (word === word2) {
        index2 = index;
      }
    }

    if (index1 >= 0 && index2 >= 0) {
      dist = Math.min(Math.abs(index1 - index2), dist);
    }
  })

  return dist;
}

// test cases
var words = ["practice", "makes", "perfect", "coding", "makes"];
var word1 = 'practice';
var word2 = 'coding';
var word3 = 'makes';
// console.log(shortestWordDist(words, word1, word2));
console.log(shortestWordDist(words, word3, word3));
