const Users = require('../models/users');
const Crypto_JS = require('crypto-js');
const jwt = require('jsonwebtoken');
const Registration_For_New_Users = async (req, res) => {
    const secret = "create_newuSers";
    const newUsers = new Users({
        username: req.body.username,
        email: req.body.email,
        password: Crypto_JS.AES.encrypt(req.body.password, secret).toString(),
        phone: req.body.phone
    })

    const user = await newUsers.save();
    res.send({
        message: "User Registration Successful",
        status: 200,
        data: user
    })
}

const Login_For_Registered_Users = async (req, res) => {
    try{

        const secret = "create_newuSers";
        const User = await Users.findOne({ email: req.body.email });
        const UserPassword = Crypto_JS.AES.decrypt(User?.password, secret).toString(Crypto_JS.enc.Utf8);
    
      
        if (User?.email !== req.body.email) {
            res.send({ message: "In_Correct Email!" })
        }
        else if (UserPassword !== req.body.password) {
            res.send({ message: "In_Correct Password!" })
        } 
        else{
           const token = jwt.sign({
                id : User._id
            },secret,{ expiresIn: '5m' })
            res.send({
                message:"User Logged In Successfully",
                status:200,
                data : { token }
            })
        }
    } catch(err){
        res.send({
            message:"User Not LoggedIn",
            status:404
        })
    }


}

const Welcome_Users = async (req,res,next) => {
    const User = await Users.findOne({ email: req.body.email });
    const { password , ...more } = User._doc
    res.send({
        status:200,
        data:{...more}
    })
}
module.exports = {

    Registration_For_New_Users,
    Login_For_Registered_Users,
    Welcome_Users

}