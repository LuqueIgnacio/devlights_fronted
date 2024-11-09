"use server"
import {redirect} from "next/navigation"
import { signOut } from "@/auth"
export async function logOut(){
    const result = await signOut()
    if(result){
        redirect("/")
    }
}