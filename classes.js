// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130




class CuboidMaker {

    constructor(params) {
  
      this.length = params.length;
  
      this.width = params.width;
  
      this.height = params.height;
  
    }
  
  
  
    volume() {
  
      // Formula for cuboid volume: length * width * height
  
      return this.length * this.width * this.height;
  
    }
  
    
  
    surfaceArea() {
  
      // Formula for cuboid surface area of a cube: 
  
      // 2 * (length * width + length * height + width * height)
  
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  
    }
  
  }
  
  
  
  const cuboid = new CuboidMaker({
  
    length: 4,
  
    width: 5,
  
    height: 5,
  
  })
  
  
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  
  console.log(cuboid.volume()); // 100
  
  console.log(cuboid.surfaceArea()); // 130
  
  
  
  /* Stretch Task:
  
  
  
    Extend the base class CuboidMaker with a sub class called CubeMaker.  
  
    Find out the formulas for volume and surface area for cubes and create those methods as well.  
  
    Create a new cube object and log out the results of your new cube.
  
  
  
  */
  
  
  
 class CubeMaker extends CuboidMaker {

	constructor(attributes) {

		super(attributes);

	}

}



const cube = new CubeMaker({

	length: 2,

	width: 2,

	height: 2

});



console.log(cube.volume()); // 18

console.log(cube.surfaceArea()); // 24
