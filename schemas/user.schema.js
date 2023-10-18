import z from 'zod'

const userSchema = z.object({
  name: z.string().min(3).max(50),
  username: z.string().min(3).max(50),
  email: z.string().email(),
  password: z.string().min(6).max(50),
  role: z.enum(['ADMIN', 'USER']),
  birthdate: z.date().min(new Date(1900, 1, 1)).max(new Date()),
})

export const validateUser = (user) => {
  return userSchema.safeParse(user)
}

export const validatePartialUser = (user) => {
  return userSchema.partial().safeParse(user)
}
