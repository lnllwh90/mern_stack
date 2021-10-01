//Add express
const express = require('express');
const mongoose = require('mongoose');

// routes for your application. Similar to views in Django, if this url is accessed read this file.

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();
//add your root, the root url will simply be a forward slash. (req = request, res = Response)

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World!'));

//Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);



// because we're using hiroku, you'll want to run process.env.PORT, or on your local the port will be 5000
const port = process.env.PORT || 5000;


//returns the port the app is running in
app.listen(port, () => console.log('Server running on port ${port}'));