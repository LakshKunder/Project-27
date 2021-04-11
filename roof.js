class Roof {
    constructor() {
        var options = { isStatic: true }
        this.body = Bodies.rectangle(300, 100, 300, 20, options)
        World.add(world, this.body);

    }
    display() {
        rectMode(CENTER)
        fill("grey");
        rect(this.body.position.x, this.body.position.y, 300, 20)
    }

}