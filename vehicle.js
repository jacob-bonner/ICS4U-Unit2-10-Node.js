// Created By: Jacob Bonner
// Created On: January 2021
// This class creates a vehicle.

class Vehicle {
  // Constructor that defines fields
  constructor(colourInput) {
    // Ensuring that the Vehicle class is abstract
    if (this.constructor === Vehicle) {
      throw "ERROR: Abstract class 'Vehicle' cannot be instantiated";
    } else {
      this.colour = colourInput;
      this.speed = 0;
      this.maximumSpeed = 112;
    }
  }

  // Setter for the colour
  setColour(userColour) {
    this.colour = userColour;
  }

  // Getter for the colour
  getColour() {
    return this.colour;
  }

  // Getter for the vehicle speed
  getSpeed() {
    return this.speed;
  }

  // Method that accelerates vehicle
  accelerate(userIncrease) {
    // Ensuring all fields are integers
    this.maximumSpeed = parseInt(this.maximumSpeed, 10);
    this.speed = parseInt(this.speed, 10);
    userIncrease = parseInt(userIncrease, 10);
    
    // Checking to see if speed exceeds maximum then increasing the speed
    if (this.speed + userIncrease > this.maximumSpeed) {
      throw "ERROR: Attempt to change vehicle property beyond allowed bounds";
    } else {
      this.speed = this.speed + userIncrease;
    }

    // Returning the new speed to the user
    return this.speed;
  }

  // Method that deccelerates the vehicle
  decelerate(userDecrease) {
    // Ensuring all fields are integers
    this.speed = parseInt(this.speed, 10);
    userDecrease = parseInt(userDecrease, 10);

    // Checking to see if speed exceeds maximum then increasing the speed
    if (this.speed - userDecrease < 0) {
      throw "ERROR: Attempt to change vehicle property beyond allowed bounds";
    } else {
      this.speed = this.speed - userDecrease;
    }

    // Returning the new speed to the user
    return this.speed;
  }
}

// Exporting the class
module.exports = Vehicle;
