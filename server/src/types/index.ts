interface UserTypes {
    name: string,
    userName: string,
    phone: string,
    email: string,
    password: string,
    posts: string[],
    location: string,
    avatar: Buffer,
    seller: {
        email: string,
        firstName: string,
        lastName: string,
        phone: string,
        town: string,
        county: string,
        title: string,
        businessAddress: string,
        businessEmail: string,
        businessPhone: string,
    },
    chats: string[],
    createdAt: Date,
    saved: string[],
    _id: string,
    products: string[],
    productLine: string
}
interface PostTypes {
    title: string,
    category: string,
    description: string,
    price: number,
    location: string,
    images: Buffer[],
    createdAt: Date,
    seller: string,
    rating: number,
    farmerName: string,
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
