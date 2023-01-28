import { json } from "express";
import { getConnection } from "./../database/database";

async function l_participantes(req, res) {
    const connection = await getConnection();
    const result = await connection.query("CALL `listar_participantes`();");
    res.send(result);
}

async function f_participantes_torneo(req, res) {
    const {id_torneo,id_usuario} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `filtrar_participantes_torneo` (?,?);",[id_torneo,id_usuario]);
    res.send(result);
}

async function f_participantes_torneo_disciplina(req, res) {
    const {id_torneo,id_usuario,id_disciplina} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `filtrar_participantes_torneo_disciplina`(?, ?, ?);",[id_torneo,id_usuario,id_disciplina]);
    res.send(result);
}

async function f_participantes_disciplina_categoria(req, res) {
    const {id_torneo,id_usuario,id_disciplina,id_categoria} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `filtrar_participantes_disciplina_categoria` (?, ?, ?, ?);",[id_torneo,id_usuario,id_disciplina,id_categoria]);
    res.send(result);
}


export const methods = {
    l_participantes,
    f_participantes_torneo,
    f_participantes_torneo_disciplina,
    f_participantes_disciplina_categoria
};