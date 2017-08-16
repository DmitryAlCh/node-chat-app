const expect = require('expect');

const {Users} = require('./users.js');


describe('Users class', () => {
  beforeEach(()=>{
    users = new Users;
    users.users = [{
      id: '1',
      name: 'Dmitry',
      room: 'Node Course'
    },{
      id: '2',
      name: 'Volodja',
      room: 'perl Course'
    },{
      id: '3',
      name: 'Cunja',
      room: 'Node Course'
    }];
  });

  it('should add new user', () =>{
    var users = new Users();
    var user = {
      id: '123',
      name: 'Dmitry',
      room: 'Node fans'
    };
    var responseUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);

  });
  it('Should return names for node course', () => {
    var userList = users.getUserList('Node Course');
    expect(userList).toEqual(['Dmitry', 'Cunja']);
  });
  it('Should return names for perl course', () => {
    var userList = users.getUserList('perl Course');
    expect(userList).toEqual(['Volodja']);
  });
  it('Should remove a user', () => {
    var removedUser = users.removeUser('1');
    expect(removedUser).toEqual({
      id: '1',
      name: 'Dmitry',
      room: 'Node Course'
    });
    // console.log('User was removed: '+ removedUser.name);
  });
  it('should not remove a user', () => {
    var removedUser = users.removeUser('669855');
    // console.log('User was removed: '+ removedUser);
    expect(removedUser).toEqual({});
  });
  it('Should find a user with a valid Id', () => {
    var foundUser = users.getUser('3');
    expect(foundUser).toEqual({
      id: '3',
      name: 'Cunja',
      room: 'Node Course'
    });
  });
  it('Should not find a user when given invalid Id', () => {
    var foundUser = users.getUser('eheheeheh');
    expect(foundUser).toEqual({});
  });
});
