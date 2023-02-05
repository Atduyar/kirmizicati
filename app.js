import { PrismaClient } from '@prisma/client'
import express from "express"
import dotenv  from "dotenv";

//Config
dotenv.config({ path: './.env' });
const port = process.env.PORT || 5000

//Init
const prisma = new PrismaClient()
const app = express()

app.get('/data', async (req, res) => {
	res.send('Hello World!')
})
app.get('/data', async (req, res) => {
	const post = await prisma.data.findMany()
	res.json(post)
})
app.get('/data:id', async (req, res) => {
	const { id } = req.params
	const post = await prisma.data.findUnique({
		where: { id }
	})
	res.json(post)
})

app.post('/data', async (req, res) => {
	const { title, content, authorEmail } = req.body
	const post = await prisma.data.create({
		data: {
			...req.body
		},
	})
	res.json(post)
})

app.listen(port, () => {
	console.log(`http://localhost:${port}`)
	console.log(`Example app listening on port ${port}`)
})