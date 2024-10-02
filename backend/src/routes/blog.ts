import { Hono } from "hono"
import { Prisma, PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
import {sign,verify,decode } from "hono/jwt"
import { CreatePostInputSchema, UpdatePostInputSchema } from "@nisrayani/bloggingsite";

const blogRouter=new Hono<{
    Bindings:{
        DATABASE_URL: string,
        JWT_PASSWORD: string
    },
    Variables:{
        userId?:string,
        prisma: PrismaClient
    }
}>()

// Middleware
blogRouter.use("/*", async (c, next) => {
    const token: (string | undefined) = c.req.header("Authorization")?.split(" ")[1];
    try {
        if (!token) return c.body("Auth token cannot be empty", 403);
        const jwtPayload = await verify(token, c.env.JWT_PASSWORD);
        //@ts-ignore
        c.set("userId", jwtPayload.id); 
        await next();
    } catch (error) {
        return c.json({
            message: "Error while user verification!!"
        },403)
    }
});

// Blog routes
blogRouter.post("/", async (c) => {
    const prisma= c.get("prisma")
    const body = await c.req.json();
    if(!CreatePostInputSchema.safeParse(body).success)return c.json({
        message:"error while parsing through zod input"
    },403)
    const post = await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            author: {connect: {id: c.get("userId")}},
        }
    })
    return c.json({
        message:"posted Successflly",
        postId: post.id
    },200)
});

blogRouter.put("/", async(c) => {
    const prisma =c.get("prisma")
    const body=await c.req.json();
    const input={
        title:body.title,
        content:body.content
    }
    if(!UpdatePostInputSchema.safeParse(input).success)return c.json({
        message:"error while parsing through zod input"
    },403)
    const post= await prisma.post.update({
        where:{
            id: body.id,
            authorId: c.get("userId")
        },data:{
            title:body.title,
            content:body.content
        }
    })
    return c.json({
        message:"Updated the post successfully",
        postId: post.id
    },200)
});
blogRouter.get("/bulk", async (c) => {
    const prisma = c.get("prisma")
    
        const posts = await prisma.post.findMany();
        
        return c.json({
            posts: posts,
        }, 200);
});

blogRouter.get("/:id",async (c) => {
    const prisma =c.get("prisma")
    console.log(`Inside id router`)
    const id=c.req.param("id")
    const post=await prisma.post.findUnique({
        where:{
            id
        }
    })
    return c.json(post,200)
});

export default blogRouter