define(["require", "exports"], function (require, exports) {
    "use strict";
    var Monning = (function () {
        function Monning(game) {
            var _this = this;
            this.game = game;
            this.direction = 1; // 1 = right, -1 = left;
            this.sprite = game.add.sprite(32, game.world.height - 150, 'dude');
            //  We need to enable physics on the player
            game.physics.arcade.enable(this.sprite);
            //  Player physics properties. Give the little guy a slight bounce.
            this.sprite.body.bounce.y = 0.2;
            this.sprite.body.gravity.y = 300;
            this.sprite.body.collideWorldBounds = true;
            this.sprite.animations.add('left', [0, 1, 2, 3], 20, true);
            this.sprite.animations.add('right', [5, 6, 7, 8], 10, true);
            this.sprite.inputEnabled = true;
            this.sprite.events.onInputDown.add(function () {
                if (_this.sprite.body.touching.down) {
                    _this.sprite.body.velocity.y = -200;
                }
                console.log("junmp");
            }), this.game;
            ;
        }
        Monning.prototype.create = function () {
        };
        Monning.prototype.update = function () {
            var body = this.sprite.body;
            if (body.touching.left) {
                this.direction = 1;
            }
            if (body.touching.right) {
                this.direction = -1;
            }
            body.velocity.x = this.direction * Monning.walkingSpeed;
            if (this.direction === 1) {
                this.sprite.animations.play('right');
            }
            else if (this.direction === -1) {
                this.sprite.animations.play('left');
            }
            else {
                this.sprite.animations.stop();
            }
        };
        Monning.walkingSpeed = 150;
        return Monning;
    }());
    exports.Monning = Monning;
});
