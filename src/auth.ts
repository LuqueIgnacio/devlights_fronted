// app/api/auth/[...nextauth]/route.ts
import { API_URL } from "@/config";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {jwtDecode} from "jwt-decode"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
        credentials: {
            email: {},
            password: {}
        },
      async authorize(credentials) {
        console.log(credentials)
        const res = await fetch(`${API_URL}/users/login`, {
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password
            }),
            method: "POST",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            
        })
        const authToken = res.headers.get("authToken")
        
        if(!authToken){
            return null
        }
        
        const userData = jwtDecode(authToken)
        console.log(userData)
        return {
            ...userData,
            token: authToken
        }

      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) { // User is available during sign-in
        token.id = user.userId
        token.token = user.token
        token.role = user.role
      }
      return token
    },
    session({ session, token }) {
      session.user.userId = token.id
      session.user.token = token.token
      session.user.role = token.role
      return session
    },
  },
  pages: {
    signIn: '/login',
    error: "/"
  },
  session: {
    strategy: "jwt", // Usa JWT para la gestión de sesiones
  },
});
