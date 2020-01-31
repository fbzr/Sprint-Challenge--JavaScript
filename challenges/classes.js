// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerClass {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }

    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cuboidClass = new CuboidMakerClass(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(`Class cuboid volume: ${cuboidClass.volume()}`); // 100
console.log(`Class cuboid surface ares: ${cuboidClass.surfaceArea()}`); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerClass {
    constructor(length) {
        super(length, length, length);
    }

    // These methods are not necessary since we already have methods that do the same thing in the Cuboid class. I'm overwriting them just because the Stretch is asking for it.
    volume() {
        return Math.pow(this.length, 3);
    }

    surfaceArea() {
        return 6 * (Math.pow(this.length, 2));
    }
}

const cube = new CubeMaker(5);
console.log(`Cube\'s volume: ${cube.volume()}`);
console.log(`Cube\'s area: ${cube.surfaceArea()}`);