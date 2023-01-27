import express from "express";
import morgan from "morgan";
//Routes
import languajeRoutes from "./routes/usr.routes";
import registroRoutes from "./routes/registro_usr.routes";
import cor from "cors";

const app= express();

// settings 
app.set("port", 4000);

app.use(cor());
//midelwares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/usr",languajeRoutes);
app.use("/api/usr_r",registroRoutes);

export default app;

