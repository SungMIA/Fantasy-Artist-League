
const user_data = require('data-store')({ path: process.cwd() + '/data/user.json'});

class User {

    constructor (id, first, last, username, email, password) {
        this.id = id;
        this.first = first;
        this.last = last;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    update() {
        user_data.set(this.id.toString(), this);
        // setting permanent data-store with updated values
    }

    delete() {
        user_data.del(this.id.toString());
    }
}

User.getAllIDs = () => {
    return Object.keys(user_data.data).map((id) => { return parseInt(id); } );
}

// let u1 = new User(0, "Helen", "Tran", "hdieut", "helen.trann00@gmail.com", "123");
// user_data.set(u1.id.toString(), u1);
        // creating a new user and setting it to data file 

User.findByID = (id) => {
    let uData = user_data.get(id);
    if (uData != null) {
        return new User(uData.id, uData.first, uData.last, uData.username, uData.email, uData.pass);
        // shouold return null or actual new data object
    }
}

 // creating id for new user by finding max id of other users and add 1 for this new id
User.next_id = User.getAllIDs().reduce((max, next_id) => {
    if (max < next_id) {
        return next_id;
    } 
    return max;
}, -1) + 1;

User.create = (first, last, username, email, password) => {
   let id = User.next_id; 
   User.next_id += 1; // unsure why for this line; don't have to do reduce every single time...?
   let u = new User(id, first, last, username, email, password);
   // now need to put this new user object into data store 
   user_data.set(u.id.toString(), u);
   return u;

}
// console.log(user_data.get()); // printing all users' datas to console/terminal 

module.exports = User;