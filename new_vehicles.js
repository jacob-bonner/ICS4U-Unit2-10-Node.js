// Created By: Jacob Bonner
// Created On: January 2021
// This program uses classes and subclasses to create and change the properties
//   of a bicycle and truck.

// Importing the class Vehicle and all child classes from other files
const Truck = require("./truck.js");
const Bike = require("./bike.js");

// Defining prompt for getting user input
const prompt = require('prompt-sync')({sigint: true});

try {
  // Creating the user's bicycle and specifying its colour
  let vehicleColour = prompt("What is the colour your bicycle: ");
  let userBike = new Bike(vehicleColour);
  console.log("You got a bike! Its colour is:", userBike.getColour());
  console.log("Your bike has", userBike.getTires(), "tires");
  console.log();

  // Creating the user's truck and specifying its colour
  vehicleColour = prompt("What is the colour your truck: ");
  let userTruck = new Truck(vehicleColour);
  console.log("You got a truck! Its colour is:", userTruck.getColour());
  console.log("Your truck has", userTruck.getTires(), "tires");

  // Setting the license plate of the user's new truck
  let licenseInput = prompt("Now that you have your truck, what is its " + 
                            "license plate number: ");
  userTruck.setLicensePlate(licenseInput);
  console.log("Your license plate is:", userTruck.getLicensePlate());
  console.log();

  // Changing the colour of the bicycle
  vehicleColour = prompt("Your bike needs some new paint! What colour is it: ");
  userBike.setColour(vehicleColour);
  console.log("The bike's new paint job colour is:", userBike.getColour());
  console.log();

  // Changing the colour of the truck
  vehicleColour = prompt("Your truck needs some new paint! " + 
                         "What colour is it: ");
  userTruck.setColour(vehicleColour);
  console.log("The truck's new paint job colour is:", userTruck.getColour());
  console.log();

  // Accelerating the truck and honking the horn
  let speedInput = prompt("Take your truck out for a ride! How fast are you " + 
                          "going (KM/h): ");
  if (isNaN(speedInput) == true) {
    // Throwing an error should one be detected
    throw "ERROR: Invalid Input";
  } else {
    // Setting the speed and showing the user
    userTruck.accelerate(speedInput);
    console.log("The truck is travelling at", userTruck.getSpeed(), "KM/h");
  }
  console.log("Honking the horn: " + userTruck.provideAir());

  // Decelerating the truck
  speedInput = prompt("You hit traffic! How much are you slowing down " + 
                      "(KM/h): ");
  if (isNaN(speedInput) == true) {
    // Throwing an error should one be detected
    throw "ERROR: Invalid Input";
  } else {
    // Setting the speed and showing the user
    userTruck.decelerate(speedInput);
    console.log("The truck is travelling at", userTruck.getSpeed(), "KM/h");
  }
  console.log();

  // Accelerating the bike and ringing the bell
  speedInput = prompt("Take your bike out for a ride! How fast are you " + 
                          "going (KM/h): ");
  if (isNaN(speedInput) == true) {
    // Throwing an error should one be detected
    throw "ERROR: Invalid Input";
  } else {
    // Setting the speed and showing the user
    userBike.accelerate(speedInput);
    console.log("The bike is travelling at", userBike.getSpeed(), "KM/h");
  }
  console.log("Ringing the bell: " + userBike.ringBell());

  // Telling the user the cadence of the bike
  console.log("Your cadence is: " + userBike.getCadence() + " RPM");

  // Decelerating the Bike
  speedInput = prompt("People on the trail! How much are you slowing down " + 
                      "(KM/h): ");
  if (isNaN(speedInput) == true) {
    // Throwing an error should one be detected
    throw "ERROR: Invalid Input";
  } else {
    // Setting the speed and showing the user
    userBike.decelerate(speedInput);
    console.log("The bike is travelling at", userBike.getSpeed(), "KM/h");
  }
 
  // Catches and tells the user what error occurred
} catch (err) {
  console.log("");
  console.error(err);
}
