import fs from "fs/promises"
import User from "../models/user"
import NewUserDTO from "../DTO/userDTO"
import { getFilleData, saveFilleData } from "../config/filleDataLayer"
export class UserService{
    public static async createNewUser(newUser: NewUserDTO): Promise<void>{
        
        const { username, password, email, birtdate, avatarUrl } = newUser
        const user: User = new User(
            username, password, email, birtdate, avatarUrl
        )
        let users:User[]= await getFilleData<User>('users') as User[];
        if (!users) users  = []
        users.push(user);
        saveFilleData<User>('users',users)
    }
    public static async findUser(userId: string): Promise<User | undefined>{
        let users:User[]= await getFilleData<User>('users') as User[];
        let user : User | undefined = users.find(u=>u.id==userId)
        console.log(userId);
        
        if(user){
            return user;
        }
        return user;
        
    }
    public static async folow(followerId: string,followingId:string): Promise<boolean>{
        let users:User[]= await getFilleData<User>('users') as User[];
        let follower : User | undefined = users.find(u=>u.id==followerId)
        const following : User | undefined = users.find(u=>u.id==followingId)
        if(!follower||!following){
            return false;
        }
        if(follower.folowing.includes(followingId)){
            console.log("כבר עוקב");
            
            return false;
        }
        following.folowers.push(followerId)
        follower.folowing.push(followingId)
        saveFilleData("users",users)
        return true;
        
    }
}