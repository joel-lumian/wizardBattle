"use strict";

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

class Person {
  constructor(name, hp, inv, xp) {
    this.name = name;
    this.hp = 10;
    this.inv = inv;
    this.xp = xp || 0;
    this.isAlive = true;
  }
  speak(text) {
    console.log(`${this.name}: ${text}`);
  }
    _isAlive() {
  	return this.isAlive === true;
  }
  takeDmg(damage) {
    if (this.isAlive) {
    	this.hp -= damage;
      if (this.hp < damage) {
        this.isAlive = false;
        console.log(`${this.name} is dead.`);
      }
      return true;
    }
    else {
    	console.log(`${this.name} is dead.`);
      return false;
    }
  }
