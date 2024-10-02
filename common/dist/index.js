"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePostInputSchema = exports.CreatePostInputSchema = exports.SigninInputSchema = exports.SignupInputSchema = void 0;
const zod_1 = require("zod");
exports.SignupInputSchema = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string()
});
exports.SigninInputSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string()
});
exports.CreatePostInputSchema = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
    published: zod_1.z.boolean().optional()
});
exports.UpdatePostInputSchema = zod_1.z.object({
    title: zod_1.z.string().optional(),
    content: zod_1.z.string().optional(),
    published: zod_1.z.boolean().optional()
});
