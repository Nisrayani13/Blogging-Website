import { Hono } from "hono"
import { Prisma, PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
import {sign,verify,decode } from "hono/jwt"

const userRouter= new Hono<{
    Bindings:{
        DATABASE_URL: string,
        JWT_PASSWORD: string
    },
    Variables:{
        prisma: PrismaClient
    }
}>();

userRouter.post("/signup", async (c) => {
    const prisma = c.get("prisma")

    const body = await c.req.json();
    const user = await prisma.user.create({
        data: {
            email: body.email,
            name: body.name,
            password: body.password
        }
    });

    const token = await sign({ id: user.id }, c.env.JWT_PASSWORD);
    
    return c.json({ jwt: token });
});

userRouter.post("/signin", async (c) => {
    const prisma = c.get("prisma");
    const body = await c.req.json();
    const userExist = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    });
    
    if (!userExist) return c.json({ error: "User not found!!!" });
    const token = await sign({ id: userExist.id }, c.env.JWT_PASSWORD);

    return c.json({ jwt: token });
});

export default userRouter