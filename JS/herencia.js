
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


function Bus(){
	this.beep = function(){
		return ("BEEP!");
	}
	this.velocity = 0;

}

Bus.prototype = Object.create(Car.prototype)


var bus = new Bus();
var bus = new Bus();
console.log(bus.velocity); // => 0

bus.accelerate();
console.log(bus.velocity); // => 1

bus.accelerate(2);
console.log(bus.velocity); // => 3

bus.break();
console.log(bus.velocity); // => 2

bus.break(2);
console.log(bus.velocity); // => 2

bus.beep(); // => "BEEP!"






























