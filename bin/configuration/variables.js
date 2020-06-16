const  variables = {
    Database: {
        connection:'mongodb+srv://<username>:<password>@pagarmedatabase-f45nq.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority'
    },
    Security:{
        secrectKey:process.env.secrectKey
    },
    Pagarme:{
        pagarmeKey:'ak_test_X67tW1Ims0XD31CkXsDPYf79g92lE2'
    }
}

module.exports = variables;