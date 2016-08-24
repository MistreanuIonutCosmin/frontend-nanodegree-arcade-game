var allEnemies, player, score;

function initialiseObjects() {
    allEnemies = [];
    allEnemies.push(new Enemy(0, 50));
    allEnemies.push(new Enemy(0, 125));
    allEnemies.push(new Enemy(0, 225));
    allEnemies.push(new Enemy(200, 225));
    player = new Player(200, 400);
    score = new Status(player.lives);
}

initialiseObjects();

/**
 * This listens for key presses and sends the keys to your
 */
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});


/**
 * Resetting the score, the speed of the enemy and restarting the game
 */
function restart() {
    ctx.clearRect(0, 0, 505, 50);
    pauseGame = false;
    initialiseObjects();
    init();
}

/**
 * Pausing and resuming the game
 */
function pause() {
    var button = document.getElementById("pause");

    if (pauseGame) {
        pauseGame = false;
        button.innerHTML = "Pause";
        main();
    } else {
        pauseGame = true;
        button.innerHTML = "Resume";
    }
}