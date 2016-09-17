/// <reference path="../node_modules/phaser/typescript/phaser.d.ts" />
var MonningsGame = (function () {
    function MonningsGame() {
        this.game = new Phaser.Game();
    }
    return MonningsGame;
}());
// when the page has finished loading, create our game
window.onload = function () {
    var game = new MonningsGame();
};
//# sourceMappingURL=Monnings.js.map