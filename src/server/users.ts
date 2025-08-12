"use server"

import { auth } from "@/lib/auth";

export const signIn = async(email: string, password: string)=>{
  try{
    await auth.api.signInEmail({
      
      body: {
        email,
        password,
      }
    })
    return{
      success: true,
      message: "Signed In successfully."
    }
  }catch(error){

    const e = error as Error;
    return{
      success: false,
      message: e.message || "An Unexpected Error Occurred"
    }
  }
}

export const signUp = async (email: string, password: string, username: string )=>{
  try{
    await auth.api.signUpEmail({
      body: {
        email,
        password,
        name: username
      }
    })
    return{
      success: true,
      message: "Signed Up successfully."
    }
  }catch(error){
    const e = error as Error;
    return{
      success: false,
      message: e.message || "An Unexpected Error Occurred"
    }
  }
}