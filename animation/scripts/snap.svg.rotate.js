Snap.plugin(function(Snap, Element, Paper) {
    'use strict';

    /**
     * Rotates a given Snap.Element the given amount of degrees. The amount of
     * degrees can be a negative or positive number, depending on which way you
     * want to rotate the node. The rotation will be done around the central
     * coordinates of the element.
     *
     * @method rotate
     * @public
     * @param {Integer} degrees
     */
    Paper.prototype.rotate = Element.prototype.rotate = function(degrees) {
        var bbox = this.getBBox();

        var matrix = new Snap.Matrix();
        matrix.rotate(degrees, bbox.cx, bbox.cy);
        matrix.add(this.transform().localMatrix);

        this.transform(matrix);

        eve('snap.rotated.' + this.id, this);
    };
});
