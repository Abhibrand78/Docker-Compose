import { PrismaClient } from "@prisma/client"
import express from "express"

const app = express()
const prismaClinet = new PrismaClient()


app.get("/",async(req,res)=>{
   const data = await prismaClinet.user.findMany()
    res.json({
        data
    })
})

app.post("/",async(req,res)=>{
    await prismaClinet.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    res.json({
        "message": "post endpoint"
    })
})


app.listen(3000);