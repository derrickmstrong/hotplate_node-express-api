import { v4 as uuidv4 } from 'uuid';

let users = [{
  firstName: 'Derrick',
  lastName: 'Strong',
  age: 'Unknown',
  id: 1
}];

export const getAllUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body; // req.body is payload
  users.push({ ...user, id: uuidv4() }); // push payload to users array and add an unique id to each user
  res.send(`User with name ${req.body.firstName} was added.`);
};

export const userById = (req, res) => {
  const { id } = req.params;
  const user = users.find(user => user.id === id);
  res.send(user);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  // Update users array by deleting/filtering user out
  users = users.filter(user => user.id !== id);
  res.send(`User with the id (${id}) was deleted.`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find(user => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`User with the id (${id}) was updated.`);
};