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
        } else {
            console.log(`${this.name} is dead.`);
            return false;
        }

    }
    spendMp(cost) {
        if (this.mp < cost) {
            console.log(`not enough mp!`);
            return false;
        } else {
            this.mp -= cost;
            return true;
        }
    }
    use(skillName, person) {
        var skill = this.skills[skillName];
        return skill.use(this, person);
    }
}

class Wizard extends Person {
    constructor(name, skills) {
        super(name);
        this.skills = skills;
        this.mp = 20;
    }
}

class Knight extends Person {
    constructor(name, skills) {
        super(name);
        this.skills = skills;
        this.mp = 0;
    }
}

class Item {
    constructor(name, dur) {
        this.name = name;
        this.dur = dur;
    }
}
