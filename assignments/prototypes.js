/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: '<object > was removed from the game.'
*/
function GameObject(gameObjectAttrs) {
  this.createdAt = gameObjectAttrs.createdAt;
  this.dimensions = gameObjectAttrs.dimensions;
}
// Prototype destroy 
GameObject.prototype.destroy = function () {
  return `${this.name} was removed from the game`
}


/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(charAttrs) {
  GameObject.call(this, charAttrs);
  this.hp = charAttrs.hp;
  this.name = charAttrs.name;
}
// Link child prototype building block to parent building block
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage`;
}

/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(humanoidAttrs) {
  // inherit attributes
  CharacterStats.call(this, humanoidAttrs);
  this.faction = humanoidAttrs.faction;
  this.weapons = humanoidAttrs.weapons;
  this.language = humanoidAttrs.language;
}
// inherit prototypes
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}.`
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by uncommenting these 3 objects and the list of console logs below:
const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  hp: 5,
  name: 'Bruce',
  faction: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Toungue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  hp: 15,
  name: 'Sir Mustachio',
  faction: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Toungue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 10,
  name: 'Lilith',
  faction: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.hp); // 15
console.log(mage.name); // Bruce
console.log(swordsman.faction); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


// Stretch task: 
// * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villian and one a hero and fight it out with methods!

// ===================================== Stretch ====================================

// Hero
function JohnHero(mikkoAttributes) {
  Humanoid.call(this, mikkoAttributes);
  this.village = mikkoAttributes.village;
}
JohnHero.prototype = Object.create(Humanoid.prototype);
JohnHero.prototype.fire = function (villainHero) {
  villainHero.vhp -= 5;
  return `fire 🔥damage -5hp your health is now ${villainHero.vhp}hp`
}
JohnHero.prototype.water = function (villainHero) {
  villainHero.vhp -= 10;
  return `Water 💧 damage -10hp your health is now ${villainHero.vhp}hp`
}
JohnHero.prototype.earth = function (villainHero) {
  villainHero.vhp -= 15;
  return `Earth 🌴 damage -15hp your health is now ${villainHero.vhp}hp`
}
JohnHero.prototype.air = function (villainHero) {
  villainHero.vhp -= 25;
  return `Air 💨 damage -25hp your health is now ${villainHero.vhp}hp`
}
JohnHero.prototype.combo = function (villainHero) {
  villainHero.vhp -= 100;
  return `COMBOOOOO !!! 😎😹 Air 💨,Earth 🌴,Water 💧,fire 🔥 damage -100hp your health is now ${villainHero.vhp}hp`
}

//  Villain
function VillainHero(villainAttributes) {
  Humanoid.call(this, villainAttributes);
  this.village = villainAttributes.village;
}
VillainHero.prototype = Object.create(Humanoid.prototype);

VillainHero.prototype.fart = function (objectHero) {
  objectHero.jhp -= 10;
  return `Fart 💩-10hp damage john health is now ${objectHero.jhp}hp`
}
VillainHero.prototype.poison = function (objectHero) {
  objectHero.jhp -= 25;
  return `Poison 🐍 -25hp damage john health is now ${objectHero.jhp - 25}hp`
}


// stretch char mikkoAvater
const john = new JohnHero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  jhp: 100,
  name: 'John Ꭶ Hokage',
  faction: 'Avatar Guild',
  weapons: [
    'Fire',
    'Water',
    'Earth',
    'Air'
  ],
  language: 'Avaterian',
  village: 'Konoha Village'
});

const villain = new VillainHero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  vhp: 100,
  name: 'Ikimaru ☯︎',
  faction: 'Villain Guild',
  weapons: [
    'fart'
  ],
  language: 'Villany',
  village: 'Hidden Village'
});



// Story
console.log(`The battle of ${john.name}  of ${john.village} and ${villain.name} of ${villain.village} the most dangerous enemy of ${john.village} `);
console.log(`One day the peaceful ${john.village} was attacked by ${villain.name} and killed 100 people of ${john.village}`)
console.log(`${john.name} heard the bad news and immedietely look for ${villain.name} and challenge him to duel him to leave his village so no one else get hurt and they`);
console.log(`The next morning ${john.name} ${villain.name} began their duel`);
console.log(`First the ${villain.name} attacked ${john.name} with his fart 😹 power ${villain.fart(john)} john health is now ${john.jhp}hp`)
console.log(`And then ${john.name} attacked the villain with a combo finisher ${john.combo(villain)} wahahaha`);