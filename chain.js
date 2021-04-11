class Chain {
    constructor(body1, body2, xOffset) {
        var options = { bodyA: body1, bodyB: body2, pointA: { x: xOffset, y: 0 } }
        this.rope = Constraint.create(options)
        this.xOffset = xOffset;
        World.add(world, this.rope);
    }
    display() {
        stroke("white");
        strokeWeight(3);
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        line(pointA.x + this.xOffset, pointA.y, pointB.x, pointB.y);
    }
}