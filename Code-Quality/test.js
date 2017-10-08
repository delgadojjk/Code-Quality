'use strict';

// This class is used for logins
class Login {

  /**
  * Create a login with construtor
  * receives as parameter a user object
  **/
  constructor(usersInMemory) {
    this.sessions = [];
    this.users = usersInMemory || {};
  }

  logout(user) {
    this.sessions = this.sessions.filter(session => session !== user);
  }

  
  /**
    * Checks if user exists
    * @param  {string} user
    * @return  {boolean} true if exist false if not exist
  */
  userExists(user) {
   return login.users[user]!==undefined;
  }
  

  /**
    * Register user
    * @param  {string} user
    * @param  {string} password
  */  
  registerUser(user, password) {
    this.users[user] = password;
  }

  /**
    * Delete user
    * @param  {string} user
  */  
  removeUser(user) {
     delete this.users[user];
  }

  /**
    * verify user password
    * @param  {string} user
    * @param  {string} password
    * @return {boolean} if true the password is correct else is incorrect
  */  
  checkPassword(user, password) {
    return this.users[user] === password;
  }

  /**
    * update password
    * @param  {string} user
    * @param  {string} oldPassword
    * @param  {string} newPassword
    * @return {boolean} if true the update password is suscefull else is incorrect old password
  */
  updatePassword(user, oldPassword, newPassword) {
    if (this.users[user] === oldPassword) {
      this.users[user] = newPassword;
      return true;
    }
    return false;
  }

  /**
   * Login user.
   * @param {string} user The username (user) to login
   * @param {string} password Password from the user
   */
  login(user, password) {
   if (this.users[user] === password) {
      this.sessions.push(user);
    }
  }

// Gets index of an element in an array
/* This code is not necessary  
  idx(element, array) {
    let cont=0;
    for (let i of array) {
      if (i === element) {
        return cont;
      }
      cont += 1;
    }
    return cont;
  }
*/


}


let registeredUsers = {
  user1: 'pass1',
  user2: 'pass2',
  user3: 'pass3'
};

let login = new Login(registeredUsers);

login.registerUser('user4', 'pass4');
login.login('user4', 'pass4');
login.updatePassword('user3', 'pass3', 'pass5');
login.login('user3', 'pass5');
login.logout('user4');
login.logout('user3');


console.log("*** User user1  exists? ", login.userExists('user1'));
console.log("*** User user6  exists? ", login.userExists('user6'));
console.log("*** Remove User user3 ", login.removeUser('user3'));
console.log("*** Register User5 with password 'password5' ", login.registerUser('user5','password5'));
console.log("*** Change password (password5) user5  to pass5 ", login.updatePassword('user5', 'password5', 'pass5'));
console.log("*** Register User6 with password 'pass6' ", login.registerUser('user6','pass6'))
console.log("*** Login user4 ", login.login('user4', 'pass4'));
console.log("*** Login user2 ", login.login('user2', 'pass2'));
console.log("*** Sessions active: ", login.sessions);
console.log("*** Logout user4  ", login.logout('user4'));
console.log("*** Sessions active: ", login.sessions);
console.log("*** Check password user5 password incorrect ", login.checkPassword('user5', 'passxx'));
console.log("*** Check password user5 password correct ", login.checkPassword('user5', 'pass5'));
console.log("*** Registered Users: ", login.users);
console.log("*** Login object: ", login);


