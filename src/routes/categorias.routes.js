import { Router } from "express";
import {methods as categoriaController} from "./../controllers/categorias.controller";

const router = Router();

router.post("/", categoriaController.f_categoria_disciplinas);

export default router; 