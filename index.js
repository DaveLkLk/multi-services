const express = require('express');
const cors = require('cors');
const app = express();
const port = 4500;
const path = require('path');
const Router = require('./src/routes/index.route.js');
// middlewares
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
// Router
app.use(Router);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})