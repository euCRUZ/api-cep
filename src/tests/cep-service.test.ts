import mongoose from "mongoose"
import { toggleFavorite } from "../services/cep-service"
import { CepModel } from "../models/cep-model"
import { connectDB } from "../config/db"

beforeAll(async () => {
  process.env.NODE_ENV = "test"
  await connectDB()
})

afterAll(async () => {
  await mongoose.connection.close()
})

describe("toggleFavorite", () => {
  it("should toggle the favorite field of an existing CEP", async () => {
    const cep = await CepModel.create({
      cep: "99999999",
      logradouro: "Rua Teste",
      bairro: "Bairro Teste",
      localidade: "Cidade Teste",
      uf: "RS",
      favorito: false,
    })

    const updated = await toggleFavorite("99999999")
    expect(updated?.favorito).toBe(true)

    const reverted = await toggleFavorite("99999999")
    expect(reverted?.favorito).toBe(false)

    await CepModel.deleteOne({ cep: "99999999" })
  })
})
