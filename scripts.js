var Vehicle = function() {
    this.div = document.createElement('div');
    document.getElementById('vehicles').appendChild(this.div);
    $(this.div).css({
        left: Math.floor(Math.random() * 1200),
        top: Math.floor(Math.random() * 500)
    });
    
    this.speed = null;
    this.damageLimit = null;
    this.damage = null;
}

Vehicle.prototype.move = function() {
    var randomNum = Math.floor(Math.random() * 1200) + 1;
    var randomNumb = Math.floor(Math.random() * 550) + 1;
    $('.car').animate({ 'left': '1200' }, 1000).animate({ 'left': '-20' }, 1000);
    $('.cop-car').animate({ 'top': '550' }, 1000).animate({ 'top': '-20' }, 1000);
    $('.tank').animate({ 'left': '1200' }, 2000).animate({ 'left': '-20' }, 2000);
    $('.motorcycle').animate({ 'left': randomNum, 'top': randomNumb }, 1500).animate({ 'left': '-20', 'top': '-5' }, 1500);

}

Vehicle.prototype.damaged = function() {
    this.damage = this.damage++;
}

Vehicle.prototype.totaled = function() {
    if (this.damage == this.damageLimit) {
        this.remove();
    }

}

var Car = function() {
    Vehicle.call(this);
    this.damage = 0;
    this.damageLimit = 2;
    this.div.className = 'car';
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;


function addCar() {
    var car = new Car();
    car.move()
    setInterval(function () {
        car.move();
    }, 1000);
}


// function CarDamage () {
//     var car = new Car();
//     car.damaged('.car');
// }

// function CarTotaled () {
//     var car = new Car();
//     car.totaled();
// }


var CopCar = function() {
    Vehicle.call(this);
    this.damageLimit = 3;
    this.div.className = 'cop-car';
}
CopCar.prototype = Object.create(Vehicle.prototype);
CopCar.prototype.constructor = CopCar;


function addCopCar() {
    var copper = new CopCar();
    copper.move();
    setInterval(function () {
        copper.move();
    }, 1000);
}

var Tank = function() {
    Vehicle.call(this);
    this.damageLimit = 10;
    this.div.className = 'tank';
    this.div.addEventListener('click', function () {
        this.damage();
    }.bind(this));

}
Tank.prototype = Object.create(Vehicle.prototype);
Tank.prototype.constructor = Tank;

function addTank() {
    var tanky = new Tank();
    tanky.move();
    setInterval(function () {
        tanky.move();
    }, 2000);
}

var Motorcycle = function() {
    Vehicle.call(this);
    this.damageLimit = 1;
    this.div.className = 'motorcycle';

}
Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;

function addMotorcycle() {
    var cycle = new Motorcycle();
    cycle.move();
    setInterval(function () {
        cycle.move();
    }, 2000);
}

$(document).ready(function() {

    $('.add-car').click(function() {
        addCar(); 
    });
    $('.add-cop').click(function() {
        addCopCar();    
    })

    $('.add-tank').click(function() {
        addTank();        
    })
    $('.add-motorcycle').click(function() {
        addMotorcycle();      
    });
})