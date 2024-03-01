import { z } from "zod"

export const signUpValidationSchema= z.object({
  username: z.string().min(2,{message:"Too short"}).max(50),
  name: z.string().min(2,{message:"Too short"}).max(50),
  email: z.string().email(),
  password: z.string().min(8,{message:"Password must be at least 8 characters"})
})
export const signInValidationSchema= z.object({
  email: z.string().email(),
  password: z.string().min(8,{message:"Password must be at least 8 characters"})
})

export const PostValidation = z.object({
  caption: z.string().min(5, { message: "Minimum 5 characters." }).max(2200, { message: "Maximum 2,200 caracters" }),
  file: z.custom<File[]>(),
  location: z.string().min(1, { message: "This field is required" }).max(1000, { message: "Maximum 1000 characters." }),
  tags: z.string(),
});
