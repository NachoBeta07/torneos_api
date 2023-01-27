import { Router } from "express";
import {methods as registroController} from "./../controllers/registro_usr.controller";

const router = Router();

router.post("/", registroController.registro);

export default router; 