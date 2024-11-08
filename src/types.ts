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