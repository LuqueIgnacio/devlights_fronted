import {redirect} from "next/navigation"
export async function handleSubmit(formData: FormData){
    "use server"
    let params = ""
    formData.forEach((value, key)  => {
      if(value){
        params += `${key}=${value}&`
      } 
    })
    console.log(params)
    redirect(`/store?${params}`)
}