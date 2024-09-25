import exp, { Request, Response, Router } from 'express'

const router:Router = exp.Router()

router.post('/login', async (
    req:Request,
    res:Response
):Promise<void> => {
    try {
        
        res.status(200).json({
            err: false,
            message: 'I was way too lazy to change the default message',
            data: undefined
        })
    } catch (err) {
        res.status(400).json({
            err: true,
            message: 'I was way too lazy to change the default message',
            data: null
        })
    }
})

router.delete('/logout', async (
    req:Request,
    res:Response
):Promise<void> => {
    try {
        
        res.status(200).json({
            err: false,
            message: 'I was way too lazy to change the default message',
            data: undefined
        })
    } catch (err) {
        res.status(400).json({
            err: true,
            message: 'I was way too lazy to change the default message',
            data: null
        })
    }
})

export default router