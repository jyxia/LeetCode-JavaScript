/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// remember: anagram also requires the appearance of the letter in both strings is same.
var isAnagram = function(s, t) {
  var isAnagram = true;
  if (s.length !== t.length) { return false ;}
  var sObject = {};
  for (var i = 0; i < s.length; i++) {
    sObject[s[i]] ? sObject[s[i]]++ : (sObject[s[i]] = 1);
  }
  var tObject = {};
  for (var j = 0; j < t.length; j++) {
    tObject[t[j]] ? tObject[t[j]]++ : (tObject[t[j]] = 1);
  }
  for (key in sObject) {
    if (!tObject.hasOwnProperty(key)) {
      isAnagram = false;
      break;
    } else if( sObject[key] !== tObject[key] ) {
      isAnagram = false;
      break;
    }
  }
  return isAnagram;
};
