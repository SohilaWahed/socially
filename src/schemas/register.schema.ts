import { z } from "zod"

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must not exceed 50 characters"),

    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(30, "Username must not exceed 30 characters")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores"
      ),

    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email"),

    dateOfBirth: z
      .string()
      .min(1, "Date of birth is required")
      .refine(
        (date) => {
          const birthDate = new Date(date)
          const today = new Date()

          let age =
            today.getFullYear() -
            birthDate.getFullYear()

          const monthDiff =
            today.getMonth() -
            birthDate.getMonth()

          if (
            monthDiff < 0 ||
            (monthDiff === 0 &&
              today.getDate() < birthDate.getDate())
          ) {
            age--
          }

          return age >= 18
        },
        {
          message: "You must be at least 18 years old",
        }
      ),

    gender: z.enum(["male" , "female"]),
    
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /[A-Z]/,
        "Password must contain at least one uppercase letter"
      )
      .regex(
        /[a-z]/,
        "Password must contain at least one lowercase letter"
      )
      .regex(
        /[0-9]/,
        "Password must contain at least one number"
      )
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character"
      ),

    rePassword: z
      .string()
      .min(1, "Please confirm your password"),
  })
  .refine(
    (data) => data.password === data.rePassword,
    {
      message: "Passwords do not match",
      path: ["rePassword"],
    }
  )