"use server"
import {redirect} from "next/navigation"
import { auth } from '@/auth'
import userService from '@/services/UserService'
export async function updateUser(formData: FormData) {
    const session = await auth()
    const user = {
        email: formData.get("email"),
        first_name: formData.get("first_name"),
        user_name: formData.get("user_name"),
        last_name: formData.get("last_name"),
        avatar: formData.get("avatar"),
    }

    const newUser = await userService.updateUser(user, session?.user.token)
    if(newUser){
        redirect("/")
    }
    console.log("Ha ocurrido un error")
}