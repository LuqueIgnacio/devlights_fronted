import { API_URL } from "@/config";
import { IProduct } from "@/types";

class ProductServices{
    async getProducts(searchParams: string){
        try {
            const res = await fetch(`${API_URL}/products?${searchParams}`)
            const products: IProduct[] = await res.json()
            return products
        } catch (error) {
            console.log(error)
        }
    }

    async getProductById(id: string){
        try {
            const res = await fetch(`${API_URL}/products/${id}`)
            const products: IProduct = await res.json()
            return products
        } catch (error) {
            console.log(error)
        }
    }
}

const productServices = new ProductServices()
export default productServices