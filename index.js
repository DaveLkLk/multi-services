const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4500;
const path = require('path');
const Router = require('./src/routes/index.route.js');
const {UptimeRobot } = require('./src/routes/monitor/ping.js') 
// middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// Router
app.use(Router);

setInterval(UptimeRobot, 10000*60*5);
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    setTimeout(UptimeRobot, 10000);
})