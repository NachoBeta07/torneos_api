import { getConnection } from "./../database/database";

require('dotenv').config;
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const bcrypt = require("bcrypt");


async function login(req, res) {
    const { username, password } = req.body;
    const connection = await getConnection();

    const result = await connection.query("CALL `filtrar_usuario`(?)", username);
    console.log(result.length);

    if (result.length === 0)
        return res.status(400).send("Invalid username or password");


    const account = result[0];

    
    const isValid = await bcrypt.compare(password, account.password_usuario);

    if (!isValid) return res.status(400).send("Invalid username or password");


    const token = jwt.sign(
        _.omit(account, "password_usuario"),
        process.env.JWTPRIVATEKEY
    );

    res.send({token:token});
}

export const methods = {
    login

};