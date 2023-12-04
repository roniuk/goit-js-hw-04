// const atTheOldToad = {
//     potions: [],
//     getPotions() {
//       return "List of all available potions";
//     },  
//     addPotion(potionName) {
//      return `Adding ${potionName}` ;
//     },
//   };
  
//   console.log(atTheOldToad.getPotions());
//   console.log(atTheOldToad.addPotion("Invisibility"));
//   console.log(atTheOldToad.addPotion("Power potion"));



// const atTheOldToad = {
//     potions: ["Speed potion", "Stone skin"],
//     getPotions() {
//       return this.potions;
//       //`${atTheOldToad.potions}`;
//     },
//   };
//  console.log(atTheOldToad.getPotions());




//  const atTheOldToad = {
//     potions: ["Speed potion", "Stone skin"],
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(potionName) {
//       return this.potions.push(potionName);
//     },
//   };
//   console.log(atTheOldToad.getPotions());
//  console.log(atTheOldToad.addPotion("Invisibility"));
//  console.log(atTheOldToad.getPotions());
//  console.log(atTheOldToad.addPotion("Power potion"));
//  console.log(atTheOldToad.getPotions());
//  console.log(atTheOldToad.addPotion("fsfsdfsdfsdfsdfsdf"));
//  console.log(atTheOldToad.getPotions());


 const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    this.potions.push(newPotion);
  },
  getTotalPrice() {
    let totalPrice = 0;
    //for (let i of potions) {
     return 111;
    }

  
};
console.log(atTheOldToad.getPotions());
atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
atTheOldToad.addPotion({ name: "Power potion", price: 270 });
console.log(atTheOldToad.getTotalPrice());
