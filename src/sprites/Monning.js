"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Phaser = require("phaser");
var default_1 = (function (_super) {
    __extends(default_1, _super);
    function default_1(game, x, y, asset) {
        _super.call(this, game, x, y, asset);
        this.direction = 1; // 1 = right, -1 = left;
        this.walkingSpeed = 150;
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
    default_1.prototype.create = function () {
    };
    default_1.prototype.onInputDown = function () {
        if (this.body.touching.down) {
            this.body.velocity.y = -200;
        }
    };
    default_1.prototype.update = function () {
        var body = this.body;
        if (body.touching.left) {
            this.direction = 1;
        }
        if (body.touching.right) {
            this.direction = -1;
        }
        body.velocity.x = this.direction * this.walkingSpeed;
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
    return default_1;
}(Phaser.Sprite));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=Monning.js.map