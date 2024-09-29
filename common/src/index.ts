import { z } from "zod";

export const SignupInputSchema=z.object({
    name: z.string(),
    email:z.string().email(),
    password: z.string()
})
export type SignupInputType= z.infer<typeof SignupInputSchema>;

export const SigninInputSchema=z.object({
    email:z.string().email()
})
export type SigninInputType= z.infer<typeof SigninInputSchema>;

export const CreatePostInputSchema=z.object({
    title:z.string(),
    content:z.string(),
    published:z.boolean().optional()
})
export type CreatePostInputType=z.infer<typeof CreatePostInputSchema>

export const UpdatePostInputSchema=z.object({
    title:z.string().optional(),
    content: z.string().optional(),
    published:z.boolean().optional()
})
export type UpdatePostInputType= z.infer<typeof UpdatePostInputSchema>