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

export type { Item, UserRegister };