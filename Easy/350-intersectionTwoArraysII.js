/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var hashMap = {};
    for (var i = 0; i < nums1.length; i++) {
        if (hashMap.hasOwnProperty(nums1[i])) {
            hashMap[nums1[i]]++;
        } else {
            hashMap[nums1[i]] = 1;
        }
    }
    var hashMap2 = {};
    for (i = 0; i < nums2.length; i++) {
        if (hashMap2.hasOwnProperty(nums2[i])) {
            hashMap2[nums2[i]]++;
        } else {
            hashMap2[nums2[i]] = 1;
        }
    }

    var result = [];
    for (var key in hashMap) {
        if (!hashMap2.hasOwnProperty(key)) continue;
        var numAppears = Math.min(hashMap[key], hashMap2[key]);
        for (i = 0; i < numAppears; i++) {
            result.push(parseInt(key));
        }
    }

    return result;
};

// A better and more concise solution. One hashmap needed.
var intersect = function(nums1, nums2) {
    var hashMap = {};
    for (var i = 0; i < nums1.length; i++) {
        if (hashMap.hasOwnProperty(nums1[i])) {
            hashMap[nums1[i]]++;
        } else {
            hashMap[nums1[i]] = 1;
        }
    }

    var result = [];
    for (i = 0; i < nums2.length; i++) {
        if (hashMap.hasOwnProperty(nums2[i]) && hashMap[nums2[i]] > 0) {
            result.push(nums2[i]);
            hashMap[nums2[i]]--;
        }
    }

    return result;
};
