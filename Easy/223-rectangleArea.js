/**
 * Key: find the left most x, right most x, top most y, top most y,
 * that is the overlap rectangle.
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    var areaA = (C-A) * (D-B);
    var areaB = (G-E) * (H-F);

    var left = Math.max(A, E);
    var right = Math.min(C, G);
    var top = Math.min(D, H);
    var bottom = Math.max(B, F);

    var overlapArea = 0;
    if (right > left && top > bottom) {
        overlapArea = (right -left) * (top - bottom);
    }

    return areaA + areaB - overlapArea;
};
