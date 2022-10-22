const express = require('express');
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config({ path: './config/.env' });
require('./config/db');
const { checkUser, requireAuth, isAdmin } = require('./middleware/auth.middleware');
const cors = require('cors');
const app = express();
const helmet = require("helmet");
const path = require('path');

app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" })); 
app.use('/images', express.static(path.join(__dirname, 'images')));

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false

}
 
app.use(cors(corsOptions)); 


//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// JWT
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
    res.status(200).send(res.locals.user._id)
})

//Routes
app.use('/api/auth', userRoutes);
app.use('/api/post', postRoutes)
//server
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process
        .env.PORT}`);
})