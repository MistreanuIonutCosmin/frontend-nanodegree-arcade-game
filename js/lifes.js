/**
 * Represent an object that looks like a heart.
 * @constructor
 * @param {number} x - The x coordinate in the cartesian plan.
 * @param {number} y - The y coordinate in the cartesian plan.
 */
var Life = function(x, y) {
    Character.call(this, x, y);
    this.sprite = "images/heart.png";
};

Life.prototype.constructor = Life;

/**
 *  Drawing a life on the map
 */
Life.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y, 50, 50);
};