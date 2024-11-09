import { API_URL } from "@/config";

class CartService{
    async getCart(authtoken){
        try{
            const res = await fetch(`${API_URL}/cart/getCart`, {
                headers: {
                    authToken: authtoken
                }
            })
        }catch(error){
            console.log(error)
        }
    }

    async payCart(cart, authtoken){
        try{
            let total = 0
            const products = cart.map(p => {
                total += p.price * p.quantity
                return {
                    product_id: p._id,
                    quantity: p.quantity,
                    sub_total: p.price * p.quantity
                }
            })
            const data = {
                products,
                total_price: total
            }
            const res = await fetch(`${API_URL}/orderHistory/addOrder`, {
                body: JSON.stringify(data),
                headers: {
                    authToken: authtoken,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST"
            })
            return res
        }catch(error){
            console.log(error)
        }
    }
}

const cartService = new CartService()
export default cartService