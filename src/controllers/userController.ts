import exp, { Request, Response, Router } from 'express'

const router:Router = exp.Router()


router.post('/register', async (
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

router.post('/follow', async (
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

//  ?key=value
router.get('/search', async (
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

// ?type=MINE|ELSE
router.get('/profile', async (
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

// ?type=MINE|ELSE
router.get('/followers', async (
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

// ?type=MINE|ELSE
router.get('/following', async (
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