import{query as q} from 'faunadb'

import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

import { fauna } from "../../../services/fauna"


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
  ],
  callbacks: {
    async signIn({ user, account, profile}) {
     
      const {email} = user
      
      try{ //o try irá evitar que a pessoa faça o login sem a inserção no banco de dados

        await fauna.query(
          q.Create(
            q.Collection('users'),

            {data: {email}}))

        return true
      } catch {
        return false
      }

      
    },
  }
})