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

//export both interfaces
export { UserTypes, PostTypes }
