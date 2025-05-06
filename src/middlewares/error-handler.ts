import { Request, Response, NextFunction } from "express"

export function errorHandler(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error("💥 Captured error:", err)

  const status = err.statusCode || 500
  const message = err.message || "Internal server error."

  res.status(status).json({ error: message })
}
