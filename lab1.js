let name = "Micth Cuckovich";
let age = 25;
let birthday = "January 24";
let pineapplePizza = true;

let lifeEvents = [
  "I was born in Troy, Michigan",
  "I went to Hope College",
  "I went to Junior Olympics when i was 10 years old. I placed 14th in the nation in the 800 meter event",
  "I'm a graduate of a Grand Circus bootcamp",
];

/*console.log(name);
console.log(age);
console.log(birthday);*/

//pineapplePizza (boolean)
// let pineapplePizza = prompt(
//  "Do you like pineapple in your pizza ?").toLowerCase();

// if pineapplePizza is true
if (pineapplePizza) {
  console.log(
    `My name is ${name} and I like pineapple on pizza!!
    I was born on ${birthday} and I'm currently ${age} years old.`
  );
} /*if (pineapplePizza === "no") */ 
else {
  console.log(
    `My name is ${name} and I do not like pineapple on pizza. 
    I was born on ${birthday} and I'm currently ${age} years old.`
  );
}

// let i = 0;
// while (true) 

// for loop..

for (let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
  }

let counter = 0;

while (true) {

let randomNumber = Math.floor(Math.random() * 10+1);
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !==5`);
  } else {
    counter++;
    console.log(
      `5===5.It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}
