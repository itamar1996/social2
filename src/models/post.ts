import { v4 } from "uuid"

class Post {
   public id:string
   public createdAt:Date
   public likesBy :string [] = []
    constructor(
       public authorId:string,
       public content:string,
       public heshtags:string[],
       public ref? :string
    ) {
        this.createdAt = new Date()
        this.id = v4()
    }
}
export default Post