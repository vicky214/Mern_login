const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/key');
const passport = require('passport');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use('/profile', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));
app.use('/facebookprofile', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));

const cookieSession = require('cookie-session');
const PORT = process.env.PORT || 5000;
require('./models/user');
require('./services/passport');

mongoose.connect(keys.MONGOURI,{useUnifiedTopology: true, useNewUrlParser:true},()=>{
    console.log("connected to database");
});

app.use(
    cookieSession({
        maxAge:30*24*60*60*1000,
        keys:[keys.cookiekey]
    })
)
app.use(passport.initialize());
app.use(passport.session())

require('./routes/auth')(app)

app.listen(PORT,()=>{console.log(`server is running on ${PORT}`)})