import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabse } from "./mongoose";
import { AuthOptions } from "next-auth";
import User from "@/database/user.model";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectToDatabse();
        //   if (!session.user) return session;
        const user = await User.findOne({
          email: credentials?.email,
        });

        return user;
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async session({ session }: any) {
      await connectToDatabse();
      //   if (!session.user) return session;
      const isExistingUSer = await User.findOne({ email: session.user.email });

      if (!isExistingUSer) {
        const newUser = await User.create({
          email: session.user.email,
          name: session.user.name,
          profileImage: session.user.image,
        });

        session.currentUser = newUser;
      }

      session.currentUser = isExistingUSer;

      return session;
    },
  },
  debug: process.env.NODE_ENV === "development",
  session: { strategy: "jwt" },
  jwt: { secret: process.env.NEXTAUTH_JWT_SECRET! },
  secret: process.env.NEXTAUTH_SECRET!,
};
