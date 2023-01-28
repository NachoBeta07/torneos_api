import { Router } from "express";
import {methods as participantesController} from "./../controllers/participantes.controller";

const router = Router();

router.get("/", participantesController.l_participantes);
router.post("/t", participantesController.f_participantes_torneo);
 router.post("/td", participantesController.f_participantes_torneo_disciplina);
router.post("/dc", participantesController.f_participantes_disciplina_categoria);

export default router; 