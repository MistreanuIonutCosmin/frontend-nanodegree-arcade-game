// Enemies our player must avoid
var Enemy = function(x, y) {

    this.x = x;
    this.y = y;
    this.velocity = Math.floor((Math.random() * 250) + 75);
    this.sprite = 'images/enemy-bug.png';

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    if (this.x + this.velocity * dt >= 550)
        this.x = -40;
    else {
        this.x += this.velocity * dt;
    }

};

// Computing the distance from the player to the enemy
Enemy.prototype.collision = function(player) {

    var distanceFromBugToPlayer = Math.sqrt(Math.pow(player.x - this.x, 2) + Math.pow(player.y - this.y, 2));

    if (distanceFromBugToPlayer < 30) {
        (player.lives > 1) ? player.reset(): endGame(player);
    }

};

// Draw the enemy on the screen
Enemy.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

var Player = function() {

    this.score = 0;
    this.x = 200;
    this.y = 400;
    this.allLifes = [];
    this.lives;
    this.sprite = 'images/char-boy.png';
    this.setLives();

};

// When we create a player we give him 3 lives
Player.prototype.setLives = function() {

    this.allLifes.push(new Life(450, 0));
    this.allLifes.push(new Life(400, 0));
    this.allLifes.push(new Life(350, 0));
    this.lives = 3;

};

// Preventing the player from going out from the game field
Player.prototype.update = function() {

    if (this.x > 400) {
        this.x = 400;
    }
    if (this.x < 10) {
        this.x = 0;
    }

    // We cross the road so we update the player position and the score
    if (this.y < 25) {
        this.y = 400;
        this.score++;
    }
    if (this.y > 425) {
        this.y = 425;
    }

};

// Drawing the score, the lives and the player
Player.prototype.render = function() {

    ctx.clearRect(0, 0, 500, 50);
    ctx.font = "30px Arial";
    ctx.textAlign = "left";
    ctx.fillText("SCORE: " + this.score, 0, 40);

    this.allLifes.forEach(function(life) {
        life.render();
    });

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

// Moving the player on the board based on the keyboard input
Player.prototype.handleInput = function(keycode) {

    switch (keycode) {
        case "up":
            this.y -= 50;
            break;
        case "down":
            this.y += 50;
            break;
        case "right":
            this.x += 50;
            break;
        case "left":
            this.x -= 50;
            break;
    }

};

// If the player has been hit by an enemy,
// his position is reset and he lose a life
Player.prototype.reset = function() {

    this.x = 200;
    this.y = 400;

    this.allLifes.pop();
    this.lives--;

};

// Class for creating lives for the player
var Life = function(x, y) {

    this.x = x;
    this.y = y;
    this.sprite = 'images/heart.png';

};

Life.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y, 50, 50);
};

var allEnemies;
var player;

// This function is used every time the game is restarted
function initialiseObjects() {

    allEnemies = [];

    allEnemies.push(new Enemy(0, 50));
    allEnemies.push(new Enemy(0, 125));
    allEnemies.push(new Enemy(0, 225));
    allEnemies.push(new Enemy(200, 225));
    player = new Player();

}

initialiseObjects();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});