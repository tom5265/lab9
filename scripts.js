var Vehicle = function() {
    this.speed = null;
    this.damageLimit = null;
    this.damage = null;
}

Vehicle.prototype.move = function() { 
    $('.car').animate({'left':'1200'},1000).animate({'left':'-20'},1000, moveCar);
    $('.cop-car').animate({'top':'550'},1000).animate({'top':'-20'},1000, moveCopCar);
    $('.tank').animate({'left':'1200'},1500).animate({'left':'-20'},1500, moveTank);
    $('.motorcycle').animate({'left': '1200', 'top': '550'},1500).animate({'left': '-20', 'top': '-5'},1500, moveMotorcycle);
    
    
  
    
}

// Vehicle.prototype.damage = function(e, object) {
     
//     if(e.target == $(object)) {
//        $(object).damage++;
// };
// }

// Vehicle.prototype.totaled = function(object) {
//     if($(object).damage >= $(object).damageLimit) {
//         $(object).remove();
//     }
// }

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

function moveCar () {
    var car = new Car();
    car.move('.car');
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

function moveCopCar () {
    var copper = new CopCar();
    copper.move();
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

function moveTank () {
    var tanky = new Tank();
    tanky.move();
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

function moveMotorcycle () {
    var cycle = new Motorcycle();
    cycle.move();
}

$(document).ready(function () {
    $('.add-car').click(function () {
        addCar();
        moveCar();   
    });
    $('.add-cop').click(function () {
        addCopCar();
        moveCopCar();
    })

    $('.add-tank').click(function () {
        addTank();
        moveTank();
    })
    $('.add-motorcycle').click(function () {
        addMotorcycle();
        moveMotorcycle();
    });
    
})