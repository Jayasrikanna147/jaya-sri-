import { User } from './user.js';

const user1 = new User('Alice');

console.log(user1.getName()); // Output: Alice
document.body.innerHTML = `<h2>User Name: ${user1.getName()}</h2>`;
