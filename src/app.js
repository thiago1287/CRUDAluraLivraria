import express from "express";
import conectarDB from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectarDB();

conexao.on("error", (erro) => {
    console.error("erro ao conectar no DB", erro);
});

conexao.once("open", () => {
    console.log("conectado no DB");
});

const app = express();
routes(app);

export default app