import { Hono } from 'hono'
import { Prisma, PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign,verify,decode } from 'hono/jwt'

const app = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_PASSWORD: string
    }
}>()


app.post("/api/v1/user/signup",async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body=await c.req.json();
    const user =await prisma.user.create({
        data:{
            email:body.email,
            name:body.name,
            password:body.password
        }
    })

    const token =await sign({ id: user.id },c.env.JWT_PASSWORD)
    
    return c.json({
        jwt: token
    });
})
app.post("/api/v1/user/signin",async (c)=>{
    const prisma=new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const body=await c.req.json();
    const userExist= await prisma.user.findUnique({
        where:{
            email:body.email
        }
    })
    if(!userExist) return c.json({
        error: "User not found!!!"
    })
    const token=await sign({id: userExist.id}, c.env.JWT_PASSWORD);

    return c.json({jwt:token})
})
app.post("/api/v1/blog",(c)=>{
    return c.text("hiii");
})
app.put("/api/v1/blog",(c)=>{
    return c.text("hiii");
})
app.get("/api/v1/blog/:id",(c)=>{
    return c.text("hiii");
})
app.get("/api/v1/blog/bulk",(c)=>{
    return c.text("hiii");
})
export default app