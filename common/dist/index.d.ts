import { z } from "zod";
export declare const SignupInputSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    password: string;
}, {
    name: string;
    email: string;
    password: string;
}>;
export type SignupInputType = z.infer<typeof SignupInputSchema>;
export declare const SigninInputSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export type SigninInputType = z.infer<typeof SigninInputSchema>;
export declare const CreatePostInputSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    published: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    published?: boolean | undefined;
}, {
    title: string;
    content: string;
    published?: boolean | undefined;
}>;
export type CreatePostInputType = z.infer<typeof CreatePostInputSchema>;
export declare const UpdatePostInputSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    published: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    content?: string | undefined;
    published?: boolean | undefined;
}, {
    title?: string | undefined;
    content?: string | undefined;
    published?: boolean | undefined;
}>;
export type UpdatePostInputType = z.infer<typeof UpdatePostInputSchema>;
