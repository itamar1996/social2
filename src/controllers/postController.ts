import exp, { Request, Response, Router } from 'express'
import NewPostDTO from '../DTO/postDTO'
import { PostService } from '../services/postServices'

const router:Router = exp.Router()


router.get('/', async (
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

router.post('/', async (
    req:Request<any,any, NewPostDTO>,
    res:Response
):Promise<void> => {
    console.log("body",req.body);

    try {
        console.log("body",req.body);
        
        const result = PostService.createNewPost(req.body)
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

// query params: ?title=x&date=23/04/2015
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

router.get('/:id', async (
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

router.patch('/like/:id', async (
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




