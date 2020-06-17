"user strick";

const mongoose = require('mongoose');
const schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;
const moment = require('moment');


const userModel = new schema({
    nome: {
        trim: true,
        required: true,
        type:String,
    },
    email: {
        type:String,
    },
    senha: {
        type:String,
    },
    payDay:{
        type:Date,
        default:Date.now()
    },
    ativo: {
        type:Boolean,
        required: true,
        default: true,
    },
    createdAt: {
        type:Date,
        default: Date.now()
    }
},{versionKey: false});

userModel.pre('save', (next) => {
    let agora = new Date();
    const datav = new Date(moment().add(7,"days").d.toISOString());
    if (!this.createdAt) this.createdAt = agora;
    if(!this.payDay) this.createdAt = datav;
    next();
});

module.exports = mongoose.model("User", userModel);