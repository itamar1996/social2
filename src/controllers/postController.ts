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

router.get('/search/:heshtag', async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const heshtag = req.params.heshtag;        
        const posts: Post[] = await PostService.searchPostsByHeshtag(heshtag);

        if (!posts || posts.length === 0) {
            // אם לא נמצאו פוסטים
            res.status(404).json({
                err: true,
                message: 'No posts found for this hashtag',
                data: null
            });
            return; // הפסקת המשך הקוד
        }

        res.status(200).json({
            err: false,
            message: 'Posts found',
            data: posts
        });
    } catch (err) {
        res.status(500).json({
            err: true,
            message: 'Server error while searching for posts',
            data: null
        });
    }
});

router.get('/:id', async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const post:Post = await PostService.searchPostsById(req.params.id) as Post;
        
        if (!post) {
            res.status(404).json({
                err: true,
                message: 'Post not found',
                data: null
            });
            return;
        }

        res.status(200).json({
            err: false,
            message: 'Post found',
            data: post
        });
    } catch (err) {
        res.status(500).json({
            err: true,
            message: 'Server error while searching for post',
            data: null
        });
    }
});

router.patch('/like', async (
    req:Request,
    res:Response
):Promise<void> => {
    try {
        const {userId , postId} = req.body;
        const result:boolean =await PostService.addLike(userId,postId)
        console.log("res",result);
        
        if(!result)
        {
            res.status(400).json({
                err: true,
                message: 'user or post not found',
                data: null
            })
            return;
        }
        res.status(200).json({
            err: false,
            message: 'I was way too lazy to change the default message',
            data: postId
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




