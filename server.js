const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
const layouts = require('express-ejs-layouts');

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));

// EJS setup
app.set('view engine', 'ejs');
app.use(layouts);

// Express session & flash messages setup
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

// Placeholder route for testing
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

