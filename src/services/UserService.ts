import { API_URL } from "@/config";
import { IUser } from "@/types";

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

    async getUser(userId){
        try{
            const res = await fetch(`${API_URL}/users/${userId}`)
            const user: IUser = await res.json()
            return user
        }catch(error){
            console.log(error)
        }
    }

    async updateUser(user, authToken){
        try{
            const res = await fetch(`${API_URL}/users/editUser`,{
                method: "PUT",
                body: JSON.stringify(user),
                headers: {
                    authToken: authToken,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            const newUser: IUser = await res.json()
            return newUser
        }catch(error){
            console.log(error)
        }
    }
}

const userService = new UserService()
export default userService