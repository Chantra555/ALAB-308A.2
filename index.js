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
    }
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


