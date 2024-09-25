export default interface NewPostDTO{
    authorId:string,
    content:string,
    heshtags:string[],
    ref? :string
}
