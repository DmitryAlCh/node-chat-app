[{
  id: 'sjdbsjhbsjdfh',
  name: 'Dmitry',
  room: 'Nodejs course'
}]

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = {id:id, name:name, room:room};
    this.users.push(user);
    return user;
  }
  removeUser(id){
    // return user that was removed
    var index = this.users.findIndex((user) => {
      return user.id === id;
    });
    // console.log('Users index:', index);
    if (index >= 0){
      var removedUser = this.users[index];
      this.users.splice(index, 1);
      return removedUser;
    } else {
      // console.log('Provided Id does not match any users');
      return {};
    }
  }
  getUser(id){
    // return user
    var index = this.users.findIndex((user) => {
      return user.id === id;
    });
      // console.log('Users index:', index);
    if (index >= 0){
      return this.users[index];
    } else {
      // console.log('Provided Id does not match any users');
      return {};
    }
  }
  getUserList(room){
    var users = this.users.filter((user)=>{
      return user.room === room;
    });
    var namesArray = users.map((user)=>{
      return user.name;
    });
    return namesArray;
  }
}

module.exports = {
  Users
}
// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription() {
//     return `${this.name} is ${this.age} year(s) old`;
//   }
// }
//
// var me = new Person('Dmitry', 33);
// console.log(me.getUserDescription());
