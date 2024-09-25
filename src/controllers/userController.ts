import exp, { Request, Response, Router } from 'express'
import NewUserDTO from '../DTO/userDTO'
import User from '../models/user'
import { UserService } from '../services/userService'

const router:Router = exp.Router()


router.post('/register', async (
    req:Request<any,any, NewUserDTO>,
    res:Response
):Promise<void> => {
    
    try {
        console.log(req.headers);
        console.log(req.method);
        console.log(req.body);
        const result = await UserService.createNewUser(req.body)  
              
        res.status(200).json({
            err: false,
            message: 'user created',
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
        const { followerId, followingId } = req.body;
        const result:boolean = await UserService.folow(followerId,followingId)
        if (result){
        res.status(200).json({
            err: false,
            message: 'folow',
            data: undefined
        })}
        else{
            res.status(400).json({
                err: true,
                message: 'I was way too lazy to change the default message',
                data: null
            })
        }
    } catch (err) {
        res.status(400).json({
            err: true,
            message: 'I was way too lazy to change the default message',
            data: null
        })
    }
})

//  ?key=value
router.get('/search/:id', async (
    req:Request,
    res:Response
):Promise<void> => {
    try {
        const userId = req.params.id;        
        const user:User|undefined =await UserService.findUser(userId);
        if(user){
            res.status(200).json({
                err: false,
                message: 'user found',
                data: undefined
            })
        }
        else{
            res.status(400).json({
                err: true,
                message: 'user not found',
                data: null
            })
        }
    } catch (err) {
        res.status(400).json({
            err: true,
            message: 'I was way too lazy to change the default message',
            data: null
        })
    }
})

// ?type=MINE|ELSE
router.get('/profile/:id', async (
    req:Request,
    res:Response
):Promise<void> => {
    try {
        const userId = req.params.id;       
        const user: User | undefined =await UserService.findUser(userId)
        if(user){
            res.status(200).json({
                err: false,
                message: 'user found',
                data: user
            })
        }
      
    } catch (err) {
        res.status(400).json({
            err: true,
            message: 'I was way too lazy to change the default message',
            data: null
        })
    }
})

// ?type=MINE|ELSE
router.get('/followers/:id', async (
    req:Request,
    res:Response
):Promise<void> => {
    try {
        const userId = req.params.id;       
        const user: User | undefined =await UserService.findUser(userId)
        if(user){
            res.status(200).json({
                err: false,
                message: 'user found',
                data: user.folowers
            })
        }
    } catch (err) {
        res.status(400).json({
            err: true,
            message: 'I was way too lazy to change the default message',
            data: null
        })
    }
})

// ?type=MINE|ELSE
router.get('/following/:id', async (
    req:Request,
    res:Response
):Promise<void> => {
    try {
        const userId = req.params.id;       
        const user: User | undefined =await UserService.findUser(userId)
        if(user){
            res.status(200).json({
                err: false,
                message: 'user found',
                data: user.folowing
            })
        }
       
    } catch (err) {
        res.status(400).json({
            err: true,
            message: 'I was way too lazy to change the default message',
            data: null
        })
    }
})

export default router