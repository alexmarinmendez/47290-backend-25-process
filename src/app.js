import express from 'express'
import usersRouter from './routers/user.router.js'
import { Command } from 'commander'

const program = new Command()

program
    .option('-p <port>', 'Puerto del servidor', 8080)
    .option('--mode <mode>', 'Modo de ejecución', 'production')

program.parse()

const port = program.opts().p
const mode = program.opts().mode
const app = express()

const operacionCompleja = () => {
    let result = 0
    for (let index = 0; index < 5e9; index++) {
        result += index
    }
    return result
}

app.get('/', (req, res) => res.send('ok'))
app.get('/suma', (req, res) => {
    const result = operacionCompleja()
    res.json({result})
})
app.use('/users', usersRouter)


app.listen(port, () => console.log(`Server up on port ${port} running on mode ${mode}`))