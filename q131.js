"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Create two modules; one that exports a class, and another that imports the class and creates an instance.
// In another file:
var Person_1 = require("./Person");
var alice = new Person_1.Person("Ali");
alice.greet(); // Outputs: Hello, my name is Alice
// This snippet imports the Person class and uses it to create an instance.
