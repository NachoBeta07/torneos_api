import { Router } from "express";
import { methods as participantesController } from "./../controllers/participantes.controller";

const router = Router();

router.post("/", participantesController.l_participantes);
router.post("/t", participantesController.f_participantes_torneo);
router.post("/td", participantesController.f_participantes_torneo_disciplina);
router.post("/dc", participantesController.f_participantes_disciplina_categoria);
router.post("/ip", participantesController.insert_participantes);
router.post("/ipc", participantesController.insert_participantescategorias);
//
router.delete("/dpc", participantesController.delete_participantescategorias);
router.put("/ppc", participantesController.put_participantescategorias);
router.put("/pp", participantesController.put_participantes);
router.delete("/dp", participantesController.delete_participantes);
router.post("/fp", participantesController.f_participantes);
router.post("/iap", participantesController.insert_archivosparticipantes);
router.put("/pap", participantesController.put_archivosparticipantes);
router.delete("/dap", participantesController.delete_archivosparticipantes);

router.post("/lpc", participantesController.l_participantescategorias);
router.post("/bpnc", participantesController.b_participante_no_categoria);

router.post("/iap2", participantesController.insert_archivosparticipantes2);
router.put("/pap2", participantesController.put_archivosparticipantes2);


export default router; 