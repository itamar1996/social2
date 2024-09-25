import exp, { Request, Response, Router } from 'express'
import NewPostDTO from '../DTO/postDTO'
import { PostService } from '../services/postServices'
import Post from '../models/post'

const router:Router = exp.Router()


router.get('/', async (
    req:Request,
    res:Response
):Promise<void> => {
    try {
        const data:Post[] =await PostService.GetAllPosts();   
        if(!data){
            res.status(400).json({
                err: true,
                message: 'falling to get posts',
                data: null
            })
        }    
        res.status(200).json({
            err: false,
            message: 'I was way too lazy to change the default message',
            data: data
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
    try {        
        const result = PostService.createNewPost(req.body)
        if(!result){
            res.status(400).json({
                err: true,
                message: 'post not post',
                data: null
            })
        }
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
router.get('/search/:heshtag', async (
    req:Request,
    res:Response
):Promise<void> => {
    try {
        const heshtag = req.params.heshtag;        
        const posts :Post[]=await PostService.searchPostsByHeshtag(heshtag);
        console.log(posts);
        
        res.status(200).json({
            err: false,
            message: 'I was way too lazy to change the default message',
            data: posts
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




