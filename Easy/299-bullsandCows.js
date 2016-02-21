/**
 * Key two rounds
 * 1. first round scan to build the map (number -> appearances), if secret[i] === guess[i], bull++
 * if it's not a bull, increase the cow appearances in the map
 * 2. second round, skip the bull positions and compare the guess number and the map
 * if there is a cow, cow++ and decrease the cow number from the map. if the cow number is 0
 * that is, there is matched cow number between secrect and guess.
 *
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var secretMap = {};
    var cow = 0;
    var bull = 0;

    for (var i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) bull++;
        else if (secretMap[secret[i]]) secretMap[secret[i]]++;
        else secretMap[secret[i]] = 1;
    }
    for (var j = 0; j < guess.length; j++) {
        if (guess[j] !== secret[j] && secretMap[guess[j]]) {
            cow++;
            secretMap[guess[j]]--;
        }
    }

    return bull + 'A' + cow + 'B';
};
