import { getConnection } from "./../database/database";

require('dotenv').config;
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const bcrypt = require("bcrypt");


async function login(req, res) {
    const { username, password } = req.body;
    const connection = await getConnection();

    console.log(username, password);
    const result = await connection.query("CALL filtrar_usuario(?);", username);

    if (result[0].length === 0)
        return res.send({token:"Invalid username or password"});


    const account = result[0][0];

    const isValid = await bcrypt.compare(password, account.password_usuario);

    if (!isValid) return res.send({token:"Invalid username or password"});


    const token = jwt.sign(
        _.omit(account, "password_usuario"),
        process.env.JWTPRIVATEKEY
    );

    res.send({token:token});
}

export const methods = {
    login
    
};