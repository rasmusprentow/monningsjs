"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Phaser = require("phaser");
var Monning = (function (_super) {
    __extends(Monning, _super);
    function Monning(game, x, y, asset) {
        _super.call(this, game, x, y, asset);
        this.direction = 1; // 1 = right, -1 = left;
        //  We need to enable physics on the player
        game.physics.arcade.enable(this);
        //  Player physics properties. Give the little guy a slight bounce.
        this.body.bounce.y = 0.2;
        this.body.gravity.y = 300;
        this.body.collideWorldBounds = true;
        this.animations.add('left', [0, 1, 2, 3], 20, true);
        this.animations.add('right', [5, 6, 7, 8], 10, true);
        this.inputEnabled = true;
        // this.events.onInputDown(this.onInputDown);
    }
    Monning.prototype.create = function () {
    };
    Monning.prototype.onInputDown = function () {
        if (this.body.touching.down) {
            this.body.velocity.y = -200;
        }
    };
    Monning.prototype.update = function () {
        var body = this.body;
        if (body.touching.left) {
            this.direction = 1;
        }
        if (body.touching.right) {
            this.direction = -1;
        }
        body.velocity.x = this.direction * Monning.walkingSpeed;
        if (this.direction === 1) {
            this.animations.play('right');
        }
        else if (this.direction === -1) {
            this.animations.play('left');
        }
        else {
            this.animations.stop();
        }
    };
    Monning.walkingSpeed = 150;
    return Monning;
}(Phaser.Sprite));
exports.Monning = Monning;
//# sourceMappingURL=Monning.js.map