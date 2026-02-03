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

// note: instructions not clear 

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

//Part 4 Class Uniforms 

class Character{
    static MAX_HEALTH = 100; 
    static ROLES = ["Fighter","Healer", "Wizard"]; 
}

//Part 5 Gather your Party 

class AdventurerFactory {  
  constructor (role) {
    this.role = role;
    this.adventurers = [];
  }
  generate (name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
  }
  findByIndex (index) {
    return this.adventurers[index];
  }
  findByName (name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

const healers = new AdventurerFactory("Healer");
const robin = healers.generate("Robin");

// Part 6 Developing Skills 
class Character extends C{
    duel ();{
        console.log(`${this.name} your damage per hit is: `);
        super.roll();
    }
        
    duel(opponent) {
        console.log(`Duel: ${this.name} vs ${opponent.name}`);
        while (this.health > 50 && opponent.health > 50) {
            const myRoll = Math.floor(Math.random() * 20) + 1;
            const opponentRoll = Math.floor(Math.random() * 20) + 1;
            console.log(`${this.name} rolled ${myRoll}, ${opponent.name} rolled ${opponentRoll}.`);
            if (myRoll < opponentRoll) {
                this.health -= 1;
                console.log(`${this.name} loses 1 health, now at ${this.health}.`);
            } else if (opponentRoll < myRoll) {
                opponent.health -= 1;
                console.log(`${opponent.name} loses 1 health, now at ${opponent.health}.`);
            }
        }
        const winner = this.health > 50 ? this.name : opponent.name;
        console.log(`${winner} wins the duel!`);
    }
}


//Part 7: Adventure Forth -- it seems this section is optional so I'm opting not to 