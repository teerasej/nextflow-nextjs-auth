import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'
import Error from "next/error"


// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        
        // Add logic here to look up the user from the credentials supplied

        if(credentials?.username == 'admin') {
          throw new Error({statusCode:401,title:'not good'})
        }

        const user = { id: 1, name: "J Smith", email: "jsmith@example.com" }
  
        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ],
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    // async jwt({ token, user }) {
    //   return token
    // },
    // async session({session, token}) {
    //   return session
    // }
  },
})