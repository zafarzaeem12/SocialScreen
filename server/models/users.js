const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        username:{
            type:String,
            required: true
        },
        email:{
            type:String,
            required: true
        },
        password:{
            type:String,
            required: true
        },
        phone:{
            type:String,
            required: true
        },
        avatar:{
            type:String,
            default:"https://i.postimg.cc/CRct32nX/360-F-65772719-A1-UV5k-Li5n-CEWI0-BNLLi-Fa-BPEk-Ubv5-Fv.jpg"
        },
        address:{
            type:String,
            default: "enter your address"
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("Users",UserSchema)