
function Car() {
  this.velocity = 0; 
}
Car.prototype.accelerate = function(amount) {
  this.velocity += amount || 1;
  return this;
}
Car.prototype.break = function(amount) {
  this.velocity -= amount || 1;
  return this;
}

Bus.prototype = Object.create(Car.prototype)
Bus.prototype.constructor = Bus;

function Bus(){
	this.beep = function(){
		return console.log("BEEP!");
	}

}



var bus = new Bus();
var cars = bus.velocity;
console.log(cars)






























