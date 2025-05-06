import { Schema, model } from "mongoose"

export interface ICep {
  cep: string
  logradouro: string
  bairro: string
  localidade: string
  uf: string
  favorito: boolean
}

const cepSchema = new Schema<ICep>({
  cep: { type: String, required: true, unique: true },
  logradouro: { type: String, required: true },
  bairro: { type: String, required: true },
  localidade: { type: String, required: true },
  uf: { type: String, required: true },
  favorito: { type: Boolean, default: false },
})

export const CepModel = model<ICep>("Cep", cepSchema)
