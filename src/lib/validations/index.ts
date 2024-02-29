import { z } from "zod"

export const signUpValidationSchema= z.object({
  username: z.string().min(2,{message:"Too short"}).max(50),
  name: z.string().min(2,{message:"Too short"}).max(50),
  email: z.string().email(),
  password: z.string().min(8,{message:"Password must be at least 8 characters"})
})

