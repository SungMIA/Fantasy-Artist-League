// this JS file is the entry point to backend 

const express = require('express');

const cors = require('cors')

const app = express();


const User = require('./user.js');

const bodyParser = require('body-parser');
// use bodyParse to install parsers of different types into how our app interprets requests
    // app will interpret request bodies as json if that's what their types are
app.use(bodyParser.json());


app.get('/user', (req, res) => {
    res.json(User.getAllIDs());
    return;
});

// getting specific user object by its specific id
app.get('/user/:id', (req, res) => {
    let u = User.findByID(req.params.id);
    if (u == null) {
        res.status(404).send("User does not exist");
        // .send just sends a basic text to server, that's why you don't need a .json response
        return;
    } 
    res.json(u);

});

// creating new user instance..?
app.post('/user', (req, res) => {
    // expect req.body to be the json parsed body of the request; expecting body to match the user; expecting body to be a json object that has all the properties besides the id
    let {first, last, username, email, password} = req.body; // object destructuring 
        // same as ' let first = req.body.first ' , etc. etc.
    // need more code to check the validity/ if it's good
    // may need to generate a respoonse w 500 or 400 error, whatever it is 

    // if things are okay, create new resourse; send back new resourse as a response 
    let u = User.create(first, last, username, email, password);
    if (u == null) {
        res.status(400).send("Bad Request");
        return;
    }
    return res.json(u);

});

// updating user
app.put('/user/:id', (req, res) => {
    // make sure user exists first 
    let u = User.findByID(req.params.id);
    res.setHeader("Access-Control-Allow-Origin", "*")
    if (u == null) {
        res.status(404).send("User does not exist");
        return;
    }
    let {first, last, username, email, password} = req.body;
    console.log(first)
    u.first = first; 
    u.last = last;
    u.username = username;
    u.email = email;
    u.password = password;
    // user info is updated; it changes the backend memory but not on disk 
    // now need to reset what's on disk 
    u.update();
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.json(u); // returning
});

// deleting user 
app.delete('/user/:id', (req, res) => {
    let u = User.findByID(req.params.id);
    if (u == null) {
        res.status(404).send("User does not exist");
        return;
    } 
    u.delete();
    res.json(true); // json representation to show it worked 
});

const port = 3040;
// hard code port 
app.listen(port, () => {
    console.log('backend is up and running on port' + port);
});
