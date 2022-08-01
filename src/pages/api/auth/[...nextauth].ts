import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
export default NextAuth({

  providers: [
    GithubProvider({
      //autenticaçao do usuario pelo github, precisamos de dois dados do github abaixo:
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization:{
          params: {
              scope:'read:user'
          },
      },
    }),
    // ...add more providers here
  ],
})