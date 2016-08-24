/**
 * Represents a generic Character/Object that can be rendered on the map.
 * @constructor
 * @param {number} x - The x coordinate in the cartesian plan.
 * @param {number} y - The y coordinate in the cartesian plan.
 */
var Character = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = "";
};

/**
 * Drawing a character/object on the map
 **/
Character.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

