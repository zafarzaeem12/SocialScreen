const route = require('express').Router();
const auth = require('../middleware/auth')
const { 
    Registration_For_New_Users,
    Login_For_Registered_Users,
    Welcome_Users
 } = require('../controllers/users');

route.post('/register', Registration_For_New_Users);
route.post('/login' , Login_For_Registered_Users);
route.post('/home' , auth , Welcome_Users);



module.exports = route;