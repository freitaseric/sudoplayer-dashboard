import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth from 'next-auth'
import Discord from 'next-auth/providers/discord'
import { prisma } from './lib/prisma'

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [Discord],
  adapter: PrismaAdapter(prisma),
})
