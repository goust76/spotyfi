'use strict';

/*
//constructor functions and new operator
//this is constructor function and we always marck it with Big letter at the beggining
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  //very bad practice, because it will coast us good perfomance of our coad if we will have this dublicated into every person data that will be created in fucher;
  //   this.calcBY = function () {
  //     console.log(2037 - birthYear);
  //   };
};

// new operator work this way: 1) at firt it create {} (empty obj); 2) then it coals function and makes 'this' keyword = {}; 3) than {} is linked to prototipy (in this case to a Person); 4) and at the end function autimaticly return {};
//so in summery we set parrametters in construction function and then pass then into new operator and will get the same data (classnames) in which we will replase values which we put in new function; first constructed funcion is coalt prototype (as prototype house in lecture); then we can use multiple times prototype to make real functions;
const andy = new Person('Andy', 2000);
console.log(andy);
console.log(andy instanceof Person); //true; retorn bulian and checks if 'Person' is propotype of 'andy'
const jey = new Person('Jey', 2020);
const toni = new Person('Andy', 1978);
console.log(jey, toni);

//prototype
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  //thats good practice of implementing function, not upper one) (by using prototype)
  console.log(2037 - this.birthYear);
};

andy.calcAge();

console.log(andy.__proto__); //gives us data which prototypes we can use to 'andy'; now we are in Person.prototype
console.log(andy.__proto__.__proto__); //naw we are in obj.prototype
console.log(andy.__proto__.__proto__.__proto__); // cl(null), because here engen ends
console.log(Person.prototype.constructor); // Percon. prototype, because constructor potns to person

//arr proto
const arr = [1, 1, 4, 4, 6, 7, 7]; // this construction is the same as new Array === [] => because [] is a cut version of new Array;
console.log(arr.__proto__); //Array.prototype, it contains all methods that we can use to arr; so the arr dont need to contain all of them, but when it needs some of methods it will take it from arr.prototype
console.log(arr.__proto__.__proto__); //arr obj

Array.prototype.uniqe = function () {
  return [...new Set(this)];
};
console.log(arr.uniqe()); // bad practice to add methods to all construction, because 1) if every developer wiil write his own func in group proj this way will be caos; 2) if js will launch update and add new method than will be named the same as yours it will destroy your code, because it in 99% will work differently than your one;

console.log(Person.prototype.isPrototypeOf(andy)); //true; so pers prot is prot of andy;
console.log(Person.prototype.isPrototypeOf(Person)); //false; pers prot is prot of fuchere values not itself;

Person.prototype.spicies = 'Homo Sapiens';
console.log(andy, jey); // in prototype they have spicies, and as we know can use them;
console.log(andy.spicies); //Homo Sapiens

console.log(andy.hasOwnProperty('firstName')); //true; return bulian
console.log(andy.hasOwnProperty('spicies')); //false, because its not own property
*/

//ec6 classes

// const PerconCl = class {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
// };//the same but with another structure of code
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  } // scructure of ec6 classes; makes the same as protottype constructor in privious lekcher; main;

  calcAge() {
    console.log(2037 - this.birthYear);
  } //thats how we add functions; and there we can add them in classes; its because they wont be dublicated to each created class, but they always be available in their prototype

  great() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  } // simple getter; and its also goes to prototype

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    //we need to add '_' because if not will be error because of conflick with equl value (fullname that we set at the bebbining and this one); but after this manupulation actual value firstName is changed to _firstName;
    else alert(`${name} is not a Full Name`);
  }
  get fullName() {
    return this._fullName;
  }

  //static methods
  static hey() {
    console.log(`Hey mate 🙌`);
    console.log(this); // pointing to created class (PecsonCl); thats why we cant use it on new created, because they dont inherit this property;
  } // we cant use static methods to created values only to a PersonCl, because it is a cunstructor (Array.from => cant use to [])
}
PersonCl.hey();
const andy = new PersonCl('Andy Bush', 2000);
console.log(andy);
andy.calcAge();
console.log(andy.age);
andy.great();
console.log(andy.fullName);

PersonCl.hey = function () {
  console.log(`Hey mate 🙌`);
  console.log(this);
};

//1. Classes are not hoisted; we cant use them before they are declared in the code;
//2.Classe are first class cityzens; we can pass them into functios and return them, because thet are spetial type of functions;

//obj.create => another method of creatimg prototypes

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const monica = Object.create(PersonProto);
monica.name = 'Monica';
monica.birthYear = 2000;
monica.calcAge(); //37

const sandra = Object.create(PersonProto);
sandra.init('Sandra', 2017);
sandra.calcAge();
console.log(sandra);

//getter and setter

// const account = {
//   owner: 'Jonas',
//   movement: [12, 34, 231, 45, 34],

//   get latest() {
//     return this.movement.slice(-1).pop(); //here we get propperty
//   },

//   set latest(mov) {
//     this.movement.push(mov); //here we set propperty
//   }, // any setter needs to have one parametr
// }; //ussually we use only one setter or getter noot both;

// console.log(account.latest);
// account.latest = 100;
// console.log(account.movement); //thats how we get info of this manipulations;


// chalenge 1

// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h

const km = 'km/h';
const Car = function (mark, speed) {
  this.mark = mark;
  this.speed = speed;
};

const BMW = new Car('BMW', 120);
const Mercedes = new Car('Mersedes', 95);
console.log(BMW);
console.log(Mercedes);

Car.prototype.accelerate = function () {
  return console.log((this.speed += 10) + 'km/h');
};

Car.prototype.brake = function () {
  return console.log((this.speed -= 5) + 'km/h');
};
// BMW.accelerate();

// BMW.brake();
// BMW.brake();
// BMW.brake();
// BMW.accelerate();
// BMW.accelerate();
BMW.accelerate();
*/
//chalenge 2

// class CarCl {
//   constructor(mark, speed) {
//     this.mark = mark;
//     this.speed = speed;
//   }
//   accessorate() {
//     return console.log((this.speed += 10));
//   }

//   brake() {
//     return console.log((this.speed -= 5) + 'km/h');
//   }

//   get speedUS() {
//     return console.log(this.speed / 1.6);
//   }

//   set speedUS(speed) {
//     return console.log((this.speed = speed * 1.6));
//   }
// }

// const bmw = new CarCl('BMW', 120);
// console.log(bmw);
// bmw.accessorate();
// bmw.accessorate();
// bmw.accessorate();

// bmw.speedUS;
// bmw.speedUS = 50;

// const Mersedes = new CarCl('Mersedes', 95);
// console.log(Mersedes);
// Mersedes.speedUS;

/*
//chalenge 3
const EV = function (mark, speed, battery) {
  Car.call(this, mark, speed);
  this.battery = battery;
};
EV.prototype = Object.create(Car.prototype);

const Tesla = new EV('Tesla', 150, 20);
console.log(Tesla);

EV.prototype.chargeBattery = function (chargeTo) {
  return (this.battery += chargeTo);
};

console.log(Tesla.chargeBattery(70));

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.battery -= 1;
  return console.log(
    `${this.mark} going at ${this.speed} km/h, with a charge of ${this.battery}%`
  );
};
Tesla.accelerate();
Tesla.accelerate();
Tesla.brake();
Tesla.brake();
Tesla.brake();
Tesla.brake();

// 'Tesla going at 140 km/h, with a charge of 22%'

//inheritance betwen classes

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcBY = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); //we need call here to change this keyword; because here we dont use 'new' to add this function, we only use it as regular function so we need to change this key word to this keyword of person
  this.course = course;
};

//linking prototype
Student.prototype = Object.create(Person.prototype); // we need to do linking before we write functions on student prototype, because then obj create will overwrite code and your function wont be existing in prototype;
//
Student.prototype.intro = function () {
  console.log(`My name is ${this.firstName} and im studing at ${this.course}`);
};

const andy = new Student('Andy', 2020, 'faculty of Law');

console.log(andy);
andy.intro();
andy.calcBY();

//inheritance between ES6 classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  } // scructure of ec6 classes; makes the same as protottype constructor in privious lekcher; main;

  calcAge() {
    console.log(2037 - this.birthYear);
  } //thats how we add functions; and there we can add them in classes; its because they wont be dublicated to each created class, but they always be available in their prototype

  great() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  } // simple getter; and its also goes to prototype

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    //we need to add '_' because if not will be error because of conflick with equl value (fullname that we set at the bebbining and this one); but after this manupulation actual value firstName is changed to _firstName;
    else alert(`${name} is not a Full Name`);
  }
  get fullName() {
    return this._fullName;
  }

  //static methods
  static hey() {
    console.log(`Hey mate 🙌`);
    console.log(this); // pointing to created class (PecsonCl); thats why we cant use it on new created, because they dont inherit this property;
  } // we cant use static methods to created values only to a PersonCl, because it is a cunstructor (Array.from => cant use to [])
}

class StudentCl extends PersonCl {
  //with this construction we linked classes in es6
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear); //needs to be first; and we dont need call method, because super do all for us;
    this.course = course;
  }

  calcAge() {
    console.log(
      `I'm ${2037 - this.birthYear}, but I feal for ${
        2037 - this.birthYear + 10
      }`
    );
  }

  introduse() {
    console.log(`My name is ${this.fullName} and im studing at ${this.course}`);
  }
}

const matilda = new StudentCl('Matilda Renn', 2012, 'Math');
console.log(matilda);
matilda.calcAge();
matilda.introduse();

//inheritance between classes
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduse = function () {
  console.log(`My name is ${this.firstName} and im studing at ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2007, 'Economic');
console.log(jay);
jay.introduse();
jay.calcAge();

//classes feachers

//1)Public fields
//2)Privat fields
//3)Pablic methods
//4)Privat methods

class Account {
  //1)Public fields; thants how we can declare publick fields
  local = navigator.language;
  //2)Privat fields; thants how we can declare privat fields with '#'
  #movements = [];

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //Privat data;
    this._pin = pin; //by '_' we show other developers that this data needs to be protected and cant be used withot protectin
    // this._movements = []; //we can set parrameters even here; we dont need to store them in conscructor
    // this.local = navigator.language;
  }

  //3) Public methods
  getMovements() {
     this.#movements;
     return this; // with this construction we can use chaining method to do multiple actions in one go; its because if we need to return something to make fucher action possible; so we return this and are able to make other oprations
  }

  deposit(val) {
    this.#movements.push(val); // thants ho we want to impleament fubctions; not this way acc1.movements.push(200);
    return this
  }

  withdrawl(val) {
     this.deposit(-val);
     return this
  }

  _aprovLoan() {
    return true;
  } //we also use _ to not give ability to ovverwrite function and return value in another function

  giveLoan(val) {
    if (this._aprovLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Jack', 'EUR', 1111);
acc1.deposit(200);
acc1.withdrawl(150);
// acc1._movements.push(200); bad practice;
acc1.giveLoan(1000);
console.log(acc1.getMovements());
// console.log(acc1.#movements);
console.log(acc1); //{owner: 'Jack', currency: 'EUR', pin: 1111, movements: Array(0), local: 'ru-RU'}
*/

// chalenge 1

// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h

const km = 'km/h';
const Car = function (mark, speed) {
  this.mark = mark;
  this.speed = speed;
};

const BMW = new Car('BMW', 120);
const Mercedes = new Car('Mersedes', 95);
console.log(BMW);
console.log(Mercedes);

Car.prototype.accelerate = function () {
  return console.log((this.speed += 10) + 'km/h');
};

Car.prototype.brake = function () {
  return console.log((this.speed -= 5) + 'km/h');
};
// BMW.accelerate();

// BMW.brake();
// BMW.brake();
// BMW.brake();
// BMW.accelerate();
// BMW.accelerate();
BMW.accelerate();

// chalenge 2

class CarCl {
  constructor(mark, speed) {
    this.mark = mark;
    this.speed = speed;
  }
  accessorate() {
    return console.log((this.speed += 10));
  }

  brake() {
    console.log((this.speed -= 5) + 'km/h');
    return this;
  }

  get speedUS() {
    return console.log(this.speed / 1.6);
  }

  set speedUS(speed) {
    return console.log((this.speed = speed * 1.6));
  }
}

const bmw = new CarCl('BMW', 120);
console.log(bmw);
bmw.accessorate();
bmw.accessorate();
bmw.accessorate();

bmw.speedUS;
bmw.speedUS = 50;

const Mersedes = new CarCl('Mersedes', 95);
console.log(Mersedes);
Mersedes.speedUS;

//chalenge 3
const EV = function (mark, speed, battery) {
  Car.call(this, mark, speed);
  this.battery = battery;
};
EV.prototype = Object.create(Car.prototype);

const Tesla = new EV('Tesla', 150, 20);
console.log(Tesla);

EV.prototype.chargeBattery = function (chargeTo) {
  return (this.battery += chargeTo);
};

console.log(Tesla.chargeBattery(70));

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.battery -= 1;
  return console.log(
    `${this.mark} going at ${this.speed} km/h, with a charge of ${this.battery}%`
  );
};
// Tesla.accelerate();
// Tesla.accelerate();
// Tesla.brake();
// Tesla.brake();
// Tesla.brake();
// Tesla.brake();

class EVCl extends CarCl {
  #battery;
  constructor(mark, speed, battery) {
    super(mark, speed);
    this.#battery = battery;
  }

  chargeBattery(chargeTo) {
    console.log((this.#battery += chargeTo));
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#battery -= 1;
    console.log(
      `${this.mark} going at ${this.speed} km/h, with a charge of ${
        this.#battery
      }%`
    );
    return this;
  }
}
const Audi = new EVCl('Audi', 150, 20);
Audi.accelerate().brake().accelerate().chargeBattery(50);
console.log(Audi);
