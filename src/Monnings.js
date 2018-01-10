/// <reference path="../node_modules/phaser/typescript/phaser.d.ts" />
"use strict";
var Monning_1 = require("./sprites/Monning");
var MonningsGame = (function () {
    function MonningsGame() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create, update: this.update });
    }
    MonningsGame.prototype.preload = function () {
        this.game.load.image('sky', 'assets/sky.png');
        this.game.load.image('ground', 'assets/platform.png');
        this.game.load.image('star', 'assets/star.png');
        this.game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
    };
    MonningsGame.prototype.create = function () {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.add.sprite(0, 0, 'sky');
        this.platforms = this.game.add.group();
        //  We will enable physics for any object that is created in this group
        this.platforms.enableBody = true;
        // Here we create the ground.
        var ground = this.platforms.create(0, this.game.world.height - 64, 'ground');
        //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
        ground.scale.setTo(2, 2);
        //  This stops it from falling away when you jump on it
        ground.body.immovable = true;
        //  Now let's create two ledges
        var ledge = this.platforms.create(790, this.game.world.height - 84, 'ground');
        ledge.body.immovable = true;
        ledge = this.platforms.create(-30, this.game.world.height - 84, 'ground');
        ledge.body.immovable = true;
        ledge = this.platforms.create(-150, 300, 'ground');
        ledge.body.immovable = true;
        this.monning = new Monning_1.default(this.game, 32, this.game.world.height - 150, 'dude');
        this.game.add.existing(this.monning);
    };
    MonningsGame.prototype.update = function () {
        this.game.physics.arcade.collide(this.monning, this.platforms);
        this.game.debug.spriteInfo(this.monning, 32, 32);
    };
    return MonningsGame;
}());
exports.MonningsGame = MonningsGame;
//# sourceMappingURL=Monnings.js.map