import fs from "fs/promises"
import User from "../models/user"
import NewUserDTO from "../DTO/userDTO"
class UserService{
    public static async createNewUser(newUser: NewUserDTO): Promise<void>{
        const { username, password, email, birtdate, avatarUrl } = newUser
        const user: User = new User(
            username, password, email, birtdate, avatarUrl
        )
    }
}