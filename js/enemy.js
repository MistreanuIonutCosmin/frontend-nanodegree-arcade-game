/**
 * Represents an enemy character.
 * @constructor
 * @param {number} x - The x coordinate in the cartesian plan.
 * @param {number} y - The y coordinate in the cartesian plan.
 */
var Enemy = function(x, y) {
    Character.call(this, x, y);
    this.velocity = Math.floor((Math.random() * 250) + 75);
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype = Object.create(Character.prototype);
Enemy.prototype.constructor = Enemy;

/**
 * Updates the enemy position
 * @Param: {numver} dt -  The time delta between ticks
 */
Enemy.prototype.update = function(dt) {
    if (this.x + this.velocity * dt >= 550)
        this.x = -40;
    else {
        this.x += this.velocity * dt;
    }
};

/**
 * Returns true if the player collied with an enemy
 * The distance between the player and an enemy is computed using the Euclidean distance
 * http://www.cut-the-knot.org/pythagoras/DistanceFormula.shtml
 * @param {Plater} player
 * @returns {Boolean}
 */
Enemy.prototype.collision = function(player) {
    var distanceFromBugToPlayer =
        Math.sqrt(Math.pow(player.x - this.x, 2) + Math.pow(player.y - this.y, 2));

    if (distanceFromBugToPlayer < 30) return true;
};
