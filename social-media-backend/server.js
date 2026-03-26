import 'dotenv/config'
import './config/connection.js'

import express from 'express'
import cors from 'cors'

import userRoutes from './routes/users.js'
import postRoutes from './routes/post.js'

const app = express()
app.use(cors())
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/api/posts', postRoutes)
app.use('/api/users', userRoutes)


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => console.log(`Listening on port: http://localhost:${port}`))