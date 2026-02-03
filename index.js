// Part 1: Humble Beginnings

const adventurer ={
    name: "Robin",
    health: 10, 
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companionSub: {
            name: "Frank",
            type: "flea",
            inventory:["sunglasses", "hat"],
        }   
    },
    roll (mod = 0) {
const result = Math.floor(Math.random() * 20) + 1 + mod;
console.log(`${this.name} rolled a ${result}.`)
    }    
    
}

// acessing inventory through dot notation
adventurer.inventory[0]

// handle dice rolls
adventurer.roll()

//Part 2 Class Fantasy

class Character {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
        roll (mod = 0) {
const result = Math.floor(Math.random() * 20) + 1 + mod;
console.log(`${this.name} rolled a ${result}.`)
    }
}

const newRobin = new Character("NewRobin")

console.log(newRobin.roll());

// note - better way to have done this instead of following exercise instruction was turn const Robin into class and extend it 

//Part 3 Class Feautures 
class Adventurer extends Character {
  constructor (name, role) {
    super(name);
    // Adventurers have specialized roles.
    this.role = role;
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
  }
  // Adventurers have the ability to scout ahead of them.
  scout () {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
}

class companion extends Adventurer{
    constructor (name,type){
        super(name);
        this.type = type;
        this.invetory.push("+ 50 health potion");
    }
    sheild (){
        console.log(`${this.name} is protecting for this amt:`)
        super.roll();
    }

}
//change robin into class

const robin = new Adventurer("Robin");
const leo = new companion("Leo");
const frank = new companion("Frank")
