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
const multer = require('multer');
// settings 
app.set("port", 4000);

app.use(cor());
//midelwares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/usr",logRoutes);
app.use("/api/usr_r",registroRoutes);
app.use("/api/torneo",torneoR);
app.use("/api/disciplina",disciplinaR);
app.use("/api/categoria",categoriaR);
app.use("/api/participantes",partipantesR);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        console.log(file.mimetype)
      //cb(null, file.originalname + '-' + Date.now());
      cb(null, file.originalname);
    }
  });
  
  const upload = multer({ storage: storage });
  
  app.post('/api/upload', upload.single('file'), (req, res, next) => {
    const file = req.file;
    if (!file) {
      const error = new Error('Please upload a file');
      error.httpStatusCode = 400;
      return next(error);
    }
    res.send(file);
  });


export default app;

