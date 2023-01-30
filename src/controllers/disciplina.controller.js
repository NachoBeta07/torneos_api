import { json } from "express";
import { getConnection } from "./../database/database";

async function l_disciplinas_torneo(req, res) {
    const connection = await getConnection();
    const result = await connection.query("CALL `listar_disciplinas_torneo`();");
    res.send(result);
}

export const methods = {
    l_disciplinas_torneo

};