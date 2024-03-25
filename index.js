import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes.js'

const app = express()
app.use(bodyParser.json())
const port = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('about', (req,res) => {
    res.send('About Page')
})

app.use('/api', routes)

app.listen(port, () => {
    console.log(`Server is running on port => ${port}`)
})