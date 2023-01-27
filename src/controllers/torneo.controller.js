import { json } from "express";
import { getConnection } from "./../database/database";


async function l_torneo_activo(req, res) {
    const {} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `listar_torneos_activos`();");
    res.send(result);
}


export const methods = {
    l_torneo_activo

};