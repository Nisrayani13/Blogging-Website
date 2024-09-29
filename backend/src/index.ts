import { Hono } from 'hono';
import { Prisma, PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign, verify } from 'hono/jwt';
import userRouter from './routes/user';
import blogRouter from './routes/blog';

const app = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_PASSWORD: string
    },
    Variables:{
        prisma: PrismaClient
    }
}>();

app.use("*",async (c,next)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    //@ts-ignore
    c.set("prisma",prisma);
    await next();
})

app.route("/api/v1/user/",userRouter);
app.route("/api/v1/blog",blogRouter)

export default app;