interface Item {
    name: string;
    price: number;
    description: string;
    location: string;
    img: string;
    category: string;
    saved: boolean;
    id: string;
    createdAt: any;
    seller: string;
    sellerId: string;
}

interface UserRegister {
    userName: string;
    email: string;
    secPassword: string;
    seller: boolean;
    location: string;
}

interface PostTypes {
    title: string,
    category: string,
    description: string,
    price: string,
    location: string,
    images: string[],
    seller: string,
    farmerName: string,
}
interface recievedPost {
    title: string,
    category: string,
    description: string,
    price: string,
    location: string,
    images: string[],
    seller: string,
    farmerName: string,
    _id: string,
    createdAt: Date,
}
export type { Item, UserRegister, PostTypes, recievedPost };