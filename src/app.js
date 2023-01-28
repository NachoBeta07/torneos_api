import express from "express";
import morgan from "morgan";
//Routes
import logRoutes from "./routes/usr.routes";
import registroRoutes from "./routes/registro_usr.routes";
import torneoR from "./routes/torneo.routes";
import disciplinaR from "./routes/disciplinas.routes";
import categoriaR from "./routes/categorias.routes";
import partipantesR from "./routes/participantes.routes";
import cor from "cors";

const app= express();

// settings 
app.set("port", 4000);

app.use(cor());
//midelwares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/usr",logRoutes);
app.use("/api/usr_r",registroRoutes);
app.use("/api/torneo",torneoR)
app.use("/api/disciplina",disciplinaR)
app.use("/api/categoria",categoriaR)
app.use("/api/participantes",partipantesR)
export default app;

