"use strick";

const repository = require("../repositories/user-repository");
const validation = require("../bin/helpers/validation");
const ctrlBase = require("../bin/base/controller-base");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const variables = require("../bin/configuration/variables");
const _repo = new repository;

function userController() {

}


userController().prototype.post = async(req, res) => {
    let _validationContract = new validation();
    _validationContract.isRequired(req.body.body, "Informe seu nome");
    _validationContract.isRequired(req.body.email, "Informe seu email");
    _validationContract.isRequired(req.body.senha, "Informe sua senha");
    _validationContract.isRequired(req.body.senhaConfirmacao, "Informe sua senha de confirmação");
    _validationContract.isTrue(req.body.senhaConfirmacao !== req.body.senha, "As senhas devem ser iquais");
    _validationContract.isEmail(req.body.body, "Informe um email valido");

    try {}

}