import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import postRoutes from './routes/post.route.js'
import path from 'path'

dotenv.config().parsed

const app = express()
const PORT = process.env.PORT || 5000
const __dirname = path.resolve()

const allowedOrigins = process.env.NODE_ENV === 'production' 
    ? ['https://compsci-helper.vercel.app']
    : ['https://compsci-helper.vercel.app', 'http://localhost:5173']

app.use(cors({
    origin: allowedOrigins
}))

app.use(express.json())
app.use('/api/posts', postRoutes)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
}

app.listen(PORT, () => {
    connectDB()
    console.log('Server started on http://localhost:' + PORT)
})