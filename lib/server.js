import express from 'express'
import config from './config'

const app = express()

app.use(express.static('ppublic'))
app.set(`view engine`, 'ejs')

app.get('/', (req,res) => {
    res.render('index', { answer: 42 })
})

app.listen(config.port, () => console.log('Running in port 8090 '))