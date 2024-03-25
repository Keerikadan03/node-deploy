import express from 'express'

const router = express.Router()

function consoleName(req, res) {
    res.send('Hello Theree');
}

router.get('/hello', consoleName)

export default router;