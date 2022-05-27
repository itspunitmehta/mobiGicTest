const path = require('path');

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

const sequelize = require('./util/database');

const userRoute = require('./router/user');

app.use('/user',userRoute);

app.use('/',(req,res)=>{
    res.sendFile(path.join(__dirname,`views/${req.url}`));
});

app.use('/',(req,res)=>{
    res.sendFile(path.join(__dirname,`views/404.html`))
})

sequelize
.sync()
.then(()=>{
    app.listen(4000);
})
.catch(err=>{
    console.log(err)
})