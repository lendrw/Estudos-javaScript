import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Rotas
app.use("/api", userRoutes);

// Conexão MongoDB
const MONGO_URI = "mongodb://127.0.0.1:27017/minha-api";

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB conectado ✅"))
  .catch(err => console.error("Erro ao conectar MongoDB:", err));

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
