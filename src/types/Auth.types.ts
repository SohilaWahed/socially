import type { loginSchema, registerSchema } from "@/schemas/login.schema"
import { z } from "zod"


export interface AuthResponse {
  success: true
  message: string
  data: AuthData
}

export interface AuthData {
  token: string
  tokenType: string
  expiresIn: string
  user: User
}

export interface User {
  _id: string
  name: string
  username: string
  email: string
  photo: string
  cover: string
}

export type RegisterSchemaType = z.infer< typeof registerSchema>

export type LoginSchemaType = z.infer< typeof loginSchema>

