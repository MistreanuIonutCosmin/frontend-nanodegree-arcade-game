/**
 * Represents the player.
 * @constructor
 * @param {number} x - The x coordinate in the cartesian plan.
 * @param {number} y - The y coordinate in the cartesian plan.
 */
var Player = function(x, y) {
    Character.call(this, x, y);
    this.lives = 3;
    this.score = 0;
    this.sprite = 'images/char-boy.png';
};

Player.prototype = Object.create(Character.prototype);
Player.prototype.constructor = Player;

/**
 * Preventing the player from exiting the game field
 */
Player.prototype.update = function() {
    if (this.x > 400) {
        this.x = 400;
    }
    if (this.x < 10) {
        this.x = 0;
    }
    
    /* We cross the road so we update the player position and the score*/
    if (this.y < 25) {
        this.y = 400;
        this.score++;
    }
    if (this.y > 425) {
        this.y = 425;
    }
};

/** 
 * Moving the player on the board based on the keyboard input
 * @param {number} keycode 
 */
Player.prototype.handleInput = function(keycode) {
    switch (keycode) {
        case "up":
            this.y -= 83;
            break;
        case "down":
            this.y += 83;
            break;
        case "right":
            this.x += 101;
            break;
        case "left":
            this.x -= 101;
            break;
    }
};

/**
 * Resets the player position and the nr of lives left after being hit
 */
Player.prototype.reset = function() {
    this.x = 200;
    this.y = 400;
    this.lives--;
};