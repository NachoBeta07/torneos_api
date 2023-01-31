import { json } from "express";
import { getConnection } from "./../database/database";

async function l_participantes(req, res) {
    const { id_usuario } = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `listar_participantes`(?);", [id_usuario]);
    res.send(result[0]);
}

async function f_participantes_torneo(req, res) {
    const { id_torneo, id_usuario } = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `filtrar_participantes_torneo` (?,?);", [id_torneo, id_usuario]);
    res.send(result);
}

async function f_participantes_torneo_disciplina(req, res) {
    const { id_torneo, id_usuario, id_disciplina } = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `filtrar_participantes_torneo_disciplina`(?, ?, ?);", [id_torneo, id_usuario, id_disciplina]);
    res.send(result);
}

async function f_participantes_disciplina_categoria(req, res) {
    const { id_torneo, id_usuario, id_disciplina, id_categoria } = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `filtrar_participantes_disciplina_categoria` (?, ?, ?, ?);", [id_torneo, id_usuario, id_disciplina, id_categoria]);
    res.send(result);
}

//Insertar participantes
async function insert_participantes(req, res) {
    const { cedula_participante, nombres_participante, apellidos_participante, telefono_participante, fechaNacimiento_participante, correo_participante, id_participante_usuario, genero_participante } = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `insertarParticipantes`(?, ?, ?, ?, ?, ?, ?, ?);", [cedula_participante, nombres_participante, apellidos_participante, telefono_participante, fechaNacimiento_participante, correo_participante, id_participante_usuario, genero_participante]);
    res.send(result[0]);
}

//Insertar participantescategorias
async function insert_participantescategorias(req, res) {
    const { id_participanteCategoria_categoria, id_participanteCategoria_participante } = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `insertarParticipantesCategorias`(?, ?);", [id_participanteCategoria_categoria, id_participanteCategoria_participante]);
    res.send(result[0]);
}

//Eliminar participantescategorias
async function delete_participantescategorias(req, res) {
    const { id_participanteCategoria_categoria } = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `eliminarParticipantesCategorias`(?);", [id_participanteCategoria_categoria]);
    res.send(result);
}

//Modificar participantescategorias
async function put_participantescategorias(req, res) {
    const { id_participanteCategoria_categoria, id_participanteCategoria_participante, id_participanteCategoria } = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `modificarParticipantesCategorias`(?, ?,?);", [id_participanteCategoria_categoria, id_participanteCategoria_participante, id_participanteCategoria]);
    res.send(result[0]);
}

//Modificar Participante
async function put_participantes(req, res) {
    const { cedula_participante, nombres_participante, apellidos_participante, telefono_participante, fechaNacimiento_participante, correo_participante, id_participante_usuario, genero_participante, id_participante } = req.body;
    const connection = await getConnection();
    const result = await connection.query("  CALL `modificarParticipantes`(?, ?, ?, ?, ?, ?, ?, ?, ?);", [cedula_participante, nombres_participante, apellidos_participante, telefono_participante, fechaNacimiento_participante, correo_participante, id_participante_usuario, genero_participante, id_participante]);
    res.send(result[0]);
}

//Eliminar Participantes 
async function delete_participantes(req, res) {
    const { id_participante } = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `eliminarParticipantes`(?);", [id_participante]);
    res.send(result);
}

//Filtrar un participante (buscar un panticipante para modificarlo posteriormente)
async function f_participantes(req, res) {
    const { id_participante } = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `filtrar_participante`(?);", [id_participante]);
    res.send(result);
}

//Insertar archivosparticipantes
async function insert_archivosparticipantes(req, res) {
    const { nombre_archivoParticipante, ruta_archivoParticipante, id_archivoParticipante_participante, tipoArchivo_archivoParticipante } = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `insertarArchivosParticipantes`(?,?, ?, ?);", [nombre_archivoParticipante, ruta_archivoParticipante, id_archivoParticipante_participante, tipoArchivo_archivoParticipante]);
    res.send(result);
}

//Modificar archivosparticipantes
async function put_archivosparticipantes(req, res) {
    const { nombre_archivoParticipante, ruta_archivoParticipante, id_archivoParticipante_participante, tipoArchivo_archivoParticipante, id_archivoParticipante } = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `modificarArchivosParticipantes`(?,?, ?, ?, ?);", [nombre_archivoParticipante, ruta_archivoParticipante, id_archivoParticipante_participante, tipoArchivo_archivoParticipante, id_archivoParticipante]);
    res.send(result);
}

//Eliminar archivosparticipantes
async function delete_archivosparticipantes(req, res) {
    const { id_archivoParticipante } = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `eliminarArchivosParticipantes`(?);", [id_archivoParticipante]);
    res.send(result);
}

//Listar participantescategorias
async function l_participantescategorias(req, res) {
    const { id_usuario, id_categoria } = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `listar_participantes_categoria`(?,?);", [id_usuario, id_categoria]);
    res.send(result);
}

//buscar participante que no esté en categoría
async function b_participante_no_categoria(req, res) {
    const { id_usuario, id_categoria } = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `listar_participantes_no_categoria`(?,?);", [id_usuario, id_categoria]);
    res.send(result);
}

//Insertar archivosparticipantes
async function insert_participantes2(req, res) {
    const { cedula_participante, nombres_participante, apellidos_participante, telefono_participante, fechaNacimiento_participante, correo_participante, id_participante_usuario, genero_participante, nombre_archivoParticipante, nombre_fotoParticipante, ruta_archivoParticipante, ruta_fotoParticipante } = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `insertarParticipantes2`(?, ?, ?, ?, ?, ?,?, ?, ?,?, ?, ?);",
        [cedula_participante, nombres_participante, apellidos_participante, telefono_participante, fechaNacimiento_participante, correo_participante, id_participante_usuario, genero_participante, nombre_archivoParticipante, nombre_fotoParticipante, ruta_archivoParticipante, ruta_fotoParticipante]);
    res.send(result);
}
//Modificar archivosparticipantes
async function put_participantes2(req, res) {
    const { cedula_participante, nombres_participante, apellidos_participante, telefono_participante, fechaNacimiento_participante, correo_participante, id_participante_usuario, genero_participante, id_participante, nombre_archivoParticipante, nombre_fotoParticipante, ruta_archivoParticipante, ruta_fotoParticipante } = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `modificarParticipantes2`(?, ?, ?, ?, ?, ?,?,?, ?, ?,?, ?, ?);",
        [cedula_participante, nombres_participante, apellidos_participante, telefono_participante, fechaNacimiento_participante, correo_participante, id_participante_usuario, genero_participante, id_participante, nombre_archivoParticipante, nombre_fotoParticipante, ruta_archivoParticipante, ruta_fotoParticipante]);
    res.send(result);
}



export const methods = {
    l_participantes,
    f_participantes_torneo,
    f_participantes_torneo_disciplina,
    f_participantes_disciplina_categoria,
    insert_participantes,
    insert_participantescategorias,
    delete_participantescategorias,
    put_participantescategorias,
    put_participantes,
    delete_participantes,
    f_participantes,
    insert_archivosparticipantes,
    put_archivosparticipantes,
    delete_archivosparticipantes,
    l_participantescategorias,
    b_participante_no_categoria,
    insert_participantes2,
    put_participantes2
};