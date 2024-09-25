import { getFilleData, saveFilleData } from "../config/filleDataLayer"
import Post from "../models/post"
import NewPostDTO from "../DTO/postDTO"
export class PostService{
    public static async createNewPost(newPost: NewPostDTO): Promise<void>{
        const { authorId, content, heshtags, ref} = newPost
        const post: Post = new Post(
            authorId, content, heshtags, ref
        )
        let posts:Post[]= await getFilleData<Post>('posts') as Post[];
        if (!posts) posts  = []
        posts.push(post);
        saveFilleData<Post>('posts',posts)
    }
    // public static async findUser(userId: string): Promise<User | undefined>{
    //     let users:User[]= await getFilleData<User>('users') as User[];
    //     let user : User | undefined = users.find(u=>u.id==userId)
    //     console.log(userId);
        
    //     if(user){
    //         return user;
    //     }
    //     return user;
        
    // }
    // public static async folow(followerId: string,followingId:string): Promise<boolean>{
    //     let users:User[]= await getFilleData<User>('users') as User[];
    //     let follower : User | undefined = users.find(u=>u.id==followerId)
    //     const following : User | undefined = users.find(u=>u.id==followingId)
    //     if(!follower||!following){
    //         return false;
    //     }
    //     if(follower.folowing.includes(followingId)){
    //         console.log("כבר עוקב");
            
    //         return false;
    //     }
    //     following.folowers.push(followerId)
    //     follower.folowing.push(followingId)
    //     saveFilleData("users",users)
    //     return true;
        
    // }
}