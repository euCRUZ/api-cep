import express from "express"
import cepRoutes from "./routes/cep-routes"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(express.json())
app.use("/ceps", cepRoutes)

app.get("/", (_req, res) => {
  res.send("API de CEP - Desafio Técnico")
})

export default app
