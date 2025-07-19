'use strict';

const myAvatar = {
  name: 'Bob',
  points: 20,
  gender: 'male',
  hair: { color: 'black', cut: 'punk' },
  sayHi: function () {
    const title = this.gender === 'male' ? 'Sir' : 'Miss';
    return `Hi, I am ${title} ${this.name}`;
  },
};
console.log(myAvatar.sayHi());
