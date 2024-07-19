var getPlayerName = function(playerName) {
    var prefix = "====";
    var suffix = "====";
    return prefix + " " + playerName + " " + suffix;
};

console.log(getPlayerName("Kiki"));    // ==== Kiki ====
console.log(getPlayerName("Mahesha")); // ==== Mahesha ====

var getPlayerName = function(playerName) {
    var border = "|\n| ";
    var prefix = "====";
    var suffix = "====";
    return border + playerName + "\n" + border;
};

console.log(getPlayerName("Jahver"));

var getPlayerName = function(playerName) {
    var border = "|\n| ";
    var prefix = "====";
    var suffix = "====";
    return border + prefix + " " + playerName + " " + suffix + "\n" + border;
};

console.log(getPlayerName("Kiki"));    // ==== Kiki ====
console.log(getPlayerName("Mahesha")); // ==== Mahesha ====
console.log(getPlayerName("Jahver"));  // |
                                      // | ==== Jahver ====
                                      // |
