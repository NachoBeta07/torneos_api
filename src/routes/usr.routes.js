import { Router } from "express";
import {methods as usrController} from "./../controllers/usr.controller";

const router = Router();

router.post("/", usrController.login);

export default router; 