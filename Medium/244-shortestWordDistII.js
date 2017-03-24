/**
* question: http://www.programcreek.com/2014/07/leetcode-shortest-word-distance-ii-java/
*
*/

function ShortestWordDist(words) {
  this.hashMap = {};

  var map = this.hashMap;

  words.forEach(function(word, index) {
    if (word in map) {
      map[word].push(index);
    } else {
      map[word] = [index];
    }
  });
}

ShortestWordDist.prototype.shortest = function(word1, word2) {
  var list1 = this.hashMap[word1];
  var list2 = this.hashMap[word2];
  var dist = Number.MAX_VALUE;

  for (var i = 0, j = 0; i < list1.length && j < list2.length;) {
    var index1 = list1[i];
    var index2 = list2[j];

    dist = Math.min(Math.abs(index1 - index2), dist);
    if (index1 < index2) {
      i++;
    } else {
      j++;
    }
  }

  return dist;
};

// test cases
var ws = ["practice", "makes", "perfect", "coding", "makes", "google", "coding", "apple", "alpha"];
var words = new ShortestWordDist(ws);

var word1 = 'practice';
var word2 = 'coding';
var word3 = 'apple';
console.log(words.shortest(word1, word2));
console.log(words.shortest(word2, word3));
