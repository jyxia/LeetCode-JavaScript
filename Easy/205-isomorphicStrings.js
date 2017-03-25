/**
 * A simply solution but not efficient consider every character of ‘str1′ and
 * check if all occurrences of it map to same character occurrences in ‘str2′.
 * Time complexity of this solution is O(n*n).
 *
 * This is a better solution (NOT ACCEPTED, Time limit exceeded).
 * 1. check if t[i] is in the map. If yes, find out the key associated with t[i]
 * if key exists, but s[i] is not equal to key, return false;
 * if key is null, but s[i] exists in the map and map[s[i]] is not equal to t[i]
 * return false.
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  var map = {};
  for (var i = 0; i < s.length; i++) {
      var key = map.getKeyByValue(t[i]);
      if (key && s[i] !== key) {
          return false;
      } else if (s[i] in map) {
          if (map[s[i]] !== t[i]) {
              return false;
          }
      } else {
          map[s[i]] = t[i];
      }
  }
  return true;
};

Object.prototype.getKeyByValue = function(value) {
  for (var prop in this) {
      if (this.hasOwnProperty(prop)) {
          if (this[prop] === value)
              return prop;
      }
  }
};

// a better solution, use array
var isIsomorphic = function(s, t) {
    var arrS = [],
        arrT = [];

    for (var i = 0; i < s.length; i++) {
        if (arrS[s.charCodeAt(i)] !== arrT[t.charCodeAt(i)]) {
            return false;
        }

        arrS[s.charCodeAt(i)] = i;
        arrT[t.charCodeAt(i)] = i;
    }

    return true;
};
