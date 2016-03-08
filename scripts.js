var Vehicle = function() {
    this.speed = null;
    this.damageLimit = null;
}

Vehicle.prototype.move = function() {
    $(this.div).animate({
        'marginLeft' : '+=30px'
        });
}

Vehicle.prototype.damage = function() {
    
}

Vehicle.prototype.totaled = function() {
    
}

var Car = function() {
    Vehicle.call(this);   
    this.damageLimit = 2;
    
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.insert = function () {
    this.div = document.createElement('div'); 
    this.div.className = 'car';
    document.getElementById('vehicles').appendChild(this.div);
    $(this.div).css({
        left: Math.floor( Math.random() * 500),
        top: Math.floor( Math.random() * 500)
    });
}


function addCar() {
    var car = new Car();
    car.insert();
}


var CopCar = function() {
    Vehicle.call(this);
    this.damageLimit = 3;
    
}
CopCar.prototype = Object.create(Vehicle.prototype);
CopCar.prototype.constructor = CopCar;

CopCar.prototype.insert = function () {
    this.div = document.createElement('div'); 
    this.div.className = 'cop-car';
    document.getElementById('vehicles').appendChild(this.div);
    $(this.div).css({
        left: Math.floor( Math.random() * 500),
        top: Math.floor( Math.random() * 500)
    });
}


function addCopCar() {
    var copper = new CopCar();
    copper.insert();
}

var Tank = function() {
    Vehicle.call(this);
    this.damageLimit = 10;
    
}
Tank.prototype = Object.create(Vehicle.prototype);
Tank.prototype.constructor = Tank;

Tank.prototype.insert = function () {
    this.div = document.createElement('div'); 
    this.div.className = 'tank';
    document.getElementById('vehicles').appendChild(this.div);
    $(this.div).css({
        left: Math.floor( Math.random() * 500),
        top: Math.floor( Math.random() * 500)
    });
}


function addTank() {
    var tanky = new Tank();
    tanky.insert();
}


var Motorcycle = function() {
    Vehicle.call(this);
    this.damageLimit = 1;
    
}
Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;

Motorcycle.prototype.insert = function () {
    this.div = document.createElement('div'); 
    this.div.className = 'motorcycle';
    document.getElementById('vehicles').appendChild(this.div);
    $(this.div).css({
        left: Math.floor( Math.random() * 500),
        top: Math.floor( Math.random() * 500)
    });
}


function addMotorcycle() {
    var cycle = new Motorcycle();
    cycle.insert();
}



$(document).ready(function () {
    $('.add-car').click(function () {
        addCar();
         $('.car').move();
    });
    $('.add-cop').click(function () {
        addCopCar();
    })

    $('.add-tank').click(function () {
        addTank();
    })
    $('.add-motorcycle').click(function () {
        addMotorcycle();
    });
   
})