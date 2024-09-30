import User from "../models/user";
import { getFilleData, saveFilleData } from "../config/filleDataLayer";
import LoginDTO from "../DTO/loginDTO";
import jwt from "jsonwebtoken";
import TokenPayloadDTO from "../DTO/TokenPayloadDTO";


export default class AuthService {

    public static async login(userData:LoginDTO):Promise<Error|string>{
        const { username, password } = userData
        const users:User[] = await getFilleData<User>('users') as User[]
      
        if(!users) throw new Error("500: No users at all was found in the system")
       
        const user = users.find(u=>u.username == username)

        if (!user) throw new Error("401: No user with that username")
        
        // HASH THE F PASSWORDDDDDD
        if(user.password != password) throw new Error("403: Wrong passwod")
        const payload:TokenPayloadDTO = {
            username,
            id: user.id,
            avatarUrl: user.avatarUrl,
            email: user.email,
            isLockedAccount: user.isLockedAccount
        }
        return jwt.sign(payload, process.env.TOKEN_SECRET as string,{
            expiresIn:"10m"
        })
    }

}

// DO YOU REMEMBER DataTransferObject?!