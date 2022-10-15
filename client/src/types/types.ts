interface Item {
    name: string;
    price: number;
    description: string;
    location: string;
    img: any;
    saved: boolean;
    id: number;
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