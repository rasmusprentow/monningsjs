define(["require", "exports", "phaser", "./Monning"], function (require, exports, Phaser, Monning_1) {
    "use strict";
    var MonningsGame = (function () {
        function MonningsGame() {
            this.game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: this.preload, create: this.create, update: this.update });
        }
        MonningsGame.prototype.preload = function () {
            this.game.load.image('sky', 'assets/sky.png');
            this.game.load.image('ground', 'assets/platform.png');
            this.game.load.image('star', 'assets/star.png');
            this.game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
        };
        MonningsGame.prototype.create = function () {
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            //  A simple background for our game
            this.game.add.sprite(0, 0, 'sky');
            new Monning_1.Monning();
        };
        MonningsGame.prototype.update = function () {
        };
        return MonningsGame;
    }());
    exports.MonningsGame = MonningsGame;
});
