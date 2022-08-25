// User Object using Class Constructor

class User {
  name;
  age;
  address;
  book;
  constructor(name, age, address, book) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.book = book;
  }
  favoriteBook() {
    return `${this.name}'s favorite book is ${this.book}`;
  }
}

// Create new user object
const userOne = new User("ABC", 10, "Dhaka", "Bangla");
const userTwo = new User("DEF", 5, "Cumilla", "English");

console.log(userOne, userTwo.favoriteBook());
