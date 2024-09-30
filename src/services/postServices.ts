import { getFilleData, saveFilleData } from "../config/filleDataLayer";
import Post from "../models/post";
import NewPostDTO from "../DTO/postDTO";
import { UserService } from "./userService";
import User from "../models/user";
export class PostService {
  public static async createNewPost(newPost: NewPostDTO): Promise<void> {
    const { authorId, content, heshtags, ref } = newPost;
    const post: Post = new Post(authorId, content, heshtags, ref);
    let posts: Post[] = (await getFilleData<Post>("posts")) as Post[];
    if (!posts) posts = [];
    posts.push(post);
    saveFilleData<Post>("posts", posts);
  }
  public static async GetAllPosts(): Promise<Post[]> {
    let posts: Post[] = (await getFilleData<Post>("posts")) as Post[];
    if (!posts) posts = [];
    return posts;
  }
  public static async searchPostsByHeshtag(heshtag: string): Promise<Post[]> {
    
    let posts: Post[] = (await getFilleData<Post>("posts")) as Post[];
    posts = posts.filter((po) => po.heshtags.includes(`#${heshtag}`));    
    if (!posts) posts = [];
    return posts;
  }
  public static async searchPostsById(postId: string): Promise<Post | null> {
    let posts: Post[] = (await getFilleData<Post>("posts")) as Post[];
    
    const post: Post | undefined = posts.find(p => p.id === postId);

    return post || null;
}
public static async addLike(userId: string,postId:string): Promise<boolean> {    
    let posts: Post[] = (await getFilleData<Post>("posts")) as Post[];
    const post: Post | undefined = posts.find(p => p.id === postId);
    const user:User = await UserService.findUser(userId) as User;
    if(!user || !post){
        return false;
    }
    if(post.likesBy.includes(userId))
    {
        return false;
    }
    post?.likesBy.push(userId);    
    saveFilleData("posts",posts)
    return true;
}
}
