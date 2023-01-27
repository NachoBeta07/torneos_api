import { json } from "express";
import { getConnection } from "./../database/database";

async function f_categoria_disciplinas(req, res) {
    const {id_disciplinas} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `listar_disciplinas_torneo`(?);",id_disciplinas);
    res.send(result);
}

export const methods = {
    f_categoria_disciplinas

};