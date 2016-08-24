/**
 * Tracking the player lives.
 * @constructor
 * @param {number} livesNr - The initial number of lives that the player has.
 */
var Status = function(livesNr) {
    this.lives = [];
    this.setLives(livesNr);
};

Status.prototype.setLives = function(livesNr) {
    for (var i = 0; i < livesNr; i++) {
        this.lives.push(new Life(350 + i * 50, 0));
    }
};

/**
* Rendering the score and lives on the map
*/
Status.prototype.render = function (playerScore, playerLives) {
    ctx.clearRect(0, 0, 500, 50);
    ctx.font = "30px Arial";
    ctx.textAlign = "left";
    ctx.fillText("SCORE: " + playerScore, 0, 40);

    for(var life = 0; life < playerLives; life++) {
        this.lives[life].render();
    }
};
