import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.send('GET from user path /users')
})

export default router