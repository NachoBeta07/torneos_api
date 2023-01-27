import { json } from "express";
import { getConnection } from "./../database/database";

async function l_disciplinas_torneo(req, res) {
    const {id_torneo} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `listar_disciplinas_torneo`(?);",id_torneo);
    res.send(result);
}

export const methods = {
    l_disciplinas_torneo

};