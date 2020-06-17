const  variables = {
    Database: {
        connection:process.env.connection
    },
    Security:{
        secrectKey:process.env.secrectKey
    },
    Pagarme:{
        pagarmeKey:process.env.pagarmeKey
    }
}

module.exports = variables;



