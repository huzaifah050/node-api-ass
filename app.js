const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//General middleware
app.use(express.json());

//Routers
const postRoute = require('./routes/post');

app.use('/post', postRoute);

mongoose.connect(
	process.env.DB_CONNECTION,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	console.log('db connected')
);

app.listen(3000, () => console.log('Server is running'));
