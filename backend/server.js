import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import postRoutes from './routes/post.route.js'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000

app.use(cors({
    origin: 'https://compsci-helper.vercel.app'
}))

app.use(express.json())

app.use('/api/posts', postRoutes)

app.listen(PORT, () => {
    connectDB()
    console.log('Server started on http://localhost:' + PORT)
})