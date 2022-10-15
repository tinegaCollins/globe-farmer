interface Item {
    name: string;
    price: number;
    description: string;
    location: string;
    img: string;
    category: string;
    saved: boolean;
    id: string;
    createdAt: string;
    seller: string;
    sellerId: string;
}

interface UserRegister {
    userName: string;
    phone: string;
    names: string;
    email: string;
    password: string;
    seller: boolean;
    location: string;
}

export type { Item, UserRegister };