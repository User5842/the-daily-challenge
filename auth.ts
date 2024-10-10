import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import Nodemailer from "next-auth/providers/nodemailer";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(new PrismaClient()),
  providers: [
    Nodemailer({
      from: process.env.EMAIL_FROM,
      server: process.env.EMAIL_SERVER,
    }),
  ],
});
