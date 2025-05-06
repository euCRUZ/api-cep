import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const uri =
  process.env.NODE_ENV === "test"
    ? process.env.MONGO_URI_TEST
    : process.env.MONGO_URI

export const connectDB = async () => {
  if (!uri) {
    throw new Error("❌ Mongo URI is not defined in .env")
  }

  try {
    await mongoose.connect(uri)

    process.env.NODE_ENV === "test"
      ? console.log("✅ MongoDB Test connected!")
      : "✅ MongoDB Test connected!"
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err)
    process.exit(1)
  }
}
