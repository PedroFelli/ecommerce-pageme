'user strick'

const mongoose = require('mongoose');
const schema = mongoose.Schema;
const {ObjectId} = mongoose.Schema;

const cardModel = new schema({
    card_id:{
        type:String
    },
    cardNumber:{
        type:String
    },
    holder_name:{
        type:String
    },
    brand:{
        type:String
    },
    street:{
        type:String
    },
    street_number:{
        type:String
    },
    neighborhood:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    zipcode:{
        type:String
    },
    phone:{
        type:String
    },
    cpf:{
        type:String
    },
    userId:{
        type:ObjectId,
        ref:'User'
    },
    ativo:{
        type:Boolean,
        required: true,
        default: true,
    },
    createdAt:{
        type:Data,
        default: Date.now()
    },
}, {versionKey: false});

cardModel.pre('save', (next) => {
    let agora = new Date();
    if (!this.dataCriacao) this.dataCriacao = agora;
    next();
});