import { Router } from "express";
import {methods as torneoController} from "./../controllers/torneo.controller";

const router = Router();

router.get("/", torneoController.l_torneo_activo);

export default router; 