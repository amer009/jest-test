const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  test('should add user that is not in the list', () => {
    const user = new User(1234, "Santiago", "santiago@generation.org");
    expect(userController.getUsers()).not.toContain(user);
    userController.add(user);
    expect(userController.getUsers()).toContain(user);
});

test('should not remove user that is not in the list', () => {
  const user1 = new User(1234, "Santiago", "santiago@generation.org");
  const user2 = new User(5678, "Carlos", "carlos@generation.org");
  userController.add(user1);
  expect(userController.getUsers()).toContain(user1);
  expect(userController.getUsers()).not.toContain(user2);
  userController.remove(user2);
  expect(userController.getUsers()).toContain(user1);
});

test('should find user by email', () => {
  const user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  
  const foundUser = userController.findByEmail("santiago@generation.org");
  expect(foundUser).toStrictEqual(user);
});

test('should return null for non-existing email', () => {
  const foundUser = userController.findByEmail("nonexistent@example.com");
  expect(foundUser).toBeNull();
});

test('should find user by id', () => {
  const user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  
  const foundUser = userController.findById(1234);
  expect(foundUser).toStrictEqual(user);
});

test('should return null for non-existing id', () => {
  const foundUser = userController.findById(9999);
  expect(foundUser).toBeNull();
});


