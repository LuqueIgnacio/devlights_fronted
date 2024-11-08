import { API_URL } from "@/config";
import { ICategory } from "@/types";

class CategoriesServices{
    async getCategories(){
        try {
            const res = await fetch(`${API_URL}/categories`)
            const categories: ICategory[] = await res.json()
            return categories
        } catch (error) {
            console.log(error)
        }
    }
}

const categoriesServices = new CategoriesServices()
export default categoriesServices