interface UserTypes {
    name: string,
    userName: string,
    phone: string,
    email: string,
    password: string,
    posts: string[],
    location: string,
    avatar: Buffer,
    seller: boolean,
    chats: string[],
    createdAt: Date,
    saved: string[],
    _id: string,
    products: string[],
    productLine: string
}
interface PostTypes {
    title: string,
    description: string,
    price: number,
    location: string,
    category: string,
    images: Buffer[],
    createdAt: Date,
    seller: string,
    rating: number,
}
interface message  {
    sender: string,
    receiver: string,
    message: string,
    createdAt: Date,
    read: boolean
}
interface singleChat {
    chatId: string,
    users: string[],
    messages: message[],
    createdAt: Date,
    updatedAt: Date
}
export { UserTypes, PostTypes, message, singleChat }
