export interface IProduct {
    _id: string | undefined;
    name: string;
    description: string;
    stock: number;
    price: number;
    category: string;
    image: string;
}

export interface ICategory{
    _id: string
    name: string
}

export interface IUser {
    _id: string | undefined;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    role: UserRole;
    avatar: string | undefined;
  }