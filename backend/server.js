import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import postRoutes from './routes/post.route.js'

dotenv.config().parsed

const app = express()

const PORT = process.env.PORT || 5000

const allowedOrigins = process.env.NODE_ENV === 'production' 
    ? ['https://compsci-helper.vercel.app']
    : ['https://compsci-helper.vercel.app', 'http://localhost:5173']

app.use(cors({
    origin: allowedOrigins
}))

app.use(express.json())
app.use('/api/posts', postRoutes)

app.listen(PORT, () => {
    connectDB()
    console.log('Server started on http://localhost:' + PORT)
    console.log('Running in ' + process.env.NODE_ENV + ' mode')
})