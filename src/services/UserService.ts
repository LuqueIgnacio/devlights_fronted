import { API_URL } from "@/config";

class UserService{
    async register(email, password){
        try{
            const user = {
                email: email,
                password: password
            }
            const res = await fetch(`${API_URL}/users/register`, {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            return res
        }catch(error){
            console.log(error)
        }
    }
}

const userService = new UserService()
export default userService