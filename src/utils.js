"use strict";
exports.centerGameObjects = function (objects) {
    objects.forEach(function (object) {
        object.anchor.setTo(0.5);
    });
};
exports.setResponsiveWidth = function (sprite, percent, parent) {
    var percentWidth = (sprite.texture.width - (parent.width / (100 / percent))) * 100 / sprite.texture.width;
    sprite.width = parent.width / (100 / percent);
    sprite.height = sprite.texture.height - (sprite.texture.height * percentWidth / 100);
};
//# sourceMappingURL=utils.js.map