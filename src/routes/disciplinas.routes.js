import { Router } from "express";
import {methods as disciplinaController} from "./../controllers/disciplina.controller";

const router = Router();

router.get("/", disciplinaController.l_disciplinas_torneo);

export default router; 