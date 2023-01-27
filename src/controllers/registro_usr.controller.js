import { json } from "express";
import { getConnection } from "./../database/database";

require('dotenv').config;
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const bcrypt = require("bcrypt");


async function registro(req, res) {
    const {
        cedula_usuario,
        nombre_usuario,
        usuario_usuario,
        password_usuario,
        correo_usuario,
        id_usuario_rol,
        ciudad_usuario,
        estado_usuario,
    } = req.body;

    const connection = await getConnection();

    const sal = await bcrypt.genSalt(10);

    const hash = await bcrypt.hash(password_usuario, sal);

    const result = await connection.query(" CALL `crearUsuario`(?, ?, ?, ?, ?, ?, ?, ?);",
        [cedula_usuario,
            nombre_usuario,
            usuario_usuario,
            hash,
            correo_usuario,
            id_usuario_rol,
            ciudad_usuario,
            estado_usuario]);


    const account = result[0];

    const usr_ = _.omit(account, "password_usuario");

    res.send(account);
    
}

export const methods = {
    registro

};