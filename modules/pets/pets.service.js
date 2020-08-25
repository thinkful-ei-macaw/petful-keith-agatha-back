const Queue = require('../queue/Queue');
const store = require('../../store');

const pets = {
  cats: new Queue(),
  dogs: new Queue()
};

store.cats.forEach(cat => pets.cats.enqueue(cat));
store.dogs.forEach(dog => pets.dogs.enqueue(dog));

module.exports = {
  get() {
    let current = { dog: pets.dogs.show(), cat: pets.cats.show() };
    return current;
  },

  dequeue(type) {
    const pet = pets[type].dequeue();
    if (!pets[type].show()) {
      store[type].forEach((p) => pets[type].enqueue(p));}
    return pet;
  },
  getAll() {
    return { cats: pets.cats.all(), dogs: pets.dogs.all() };
  }
};



