'use strict';

// een lege object literal genaamd emptyObject
const emptyObject = {};
// een object literal genaamd myAvatar
// met 4 properties
const myAvatar = {
  name: 'Bob',
  points: 20,
  gender: 'male',
  hair: { color: 'black', cut: 'punk' },
};

console.log('Hi this is my avatar...');
console.log(myAvatar);

// opvragen property
console.log(`Name : ${myAvatar['name']}`);
console.log(`Points : ${myAvatar.points}`);

// toevoegen property
myAvatar.age = 18;
console.log(`Age : ${myAvatar.age}`);

// wijzigen van de waarde van een property
myAvatar.points = 50;
console.log(`New points : ${myAvatar.points}`);

// verwijderen van property
delete myAvatar.gender;
console.log(`Gender : '${myAvatar.gender}`);

console.log(`Hi, I am ${myAvatar.name}`);
// alle properties overlopen
for (const key in myAvatar) {
  console.log(`-- ${key} : ${myAvatar[key]}`);
}

// verzamelen van alle keys in een array
const keys = Object.keys(myAvatar);
console.log(keys);

// object destructuring
const { name, points, gender: sex } = myAvatar;
console.log('Destructuring myAvatar:');
console.log(`name: ${name}`);
console.log(`points: ${points}`);
console.log(`sex: ${sex}`);

//  object destructuring - nested and combined with array destructuring
const myAvatar2 = {
  name: 'Bob',
  points: 20,
  gender: 'male',
  hair: { color: 'black', cut: 'punk' },
  features: ['beard', 'sunglasses', 'smile'],
};

const {
  name: name2,
  hair: { color: color2 },
  features: [first, , third],
  gender: sex2,
} = myAvatar2;
console.log('Destructuring myAvatar2:');
console.log(`name2: ${name2}`);
console.log(`color2: ${color2}`);
console.log(`first: ${first}`);
console.log(`third: ${third}`);
console.log(`sex2: ${sex2}`);
