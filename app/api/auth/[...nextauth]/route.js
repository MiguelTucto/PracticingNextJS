import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from "@models/user";
import {connectToDB} from "@utils/database";
import {NextResponse} from "next/server";
import  { compare }  from 'bcryptjs';
import {session} from "@node_modules/next-auth/core/routes";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email:",
                    type: "text",
                    placeholder: "your-cool-username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password"
                }
            },
            async authorize(credentials) {
                await connectToDB().catch(() => NextResponse.json({error: "Connection failed"}));

                const result = await User.findOne({email: credentials?.email})
                if (!result) {
                    throw new Error("No user found with that email");
                }

                const checkPassword = await compare(credentials?.password, result.password)

                if (!checkPassword || result.email !== credentials?.email) {
                    throw new Error("Username or Password doesn't match");
                }

                return result;

            }
        })
    ],
    callbacks: {
        async session({ session }) {
            const sessionUser = await User
                .findOne({ email: session.user.email });

            session.user.id = sessionUser._id.toString();

            return session;
        },
        async signIn({ profile , user}) {
            try {
                await connectToDB();
                if (profile !== undefined) {
                    const userExists = await User.findOne({
                        email: profile.email
                    });

                    if (!userExists) {
                        await User.create({
                            name: profile.name,
                            phone: profile.phone,
                            location: profile.location,
                            email: profile.email,
                            password: profile.password
                        })
                    }

                    console.log("This is profile next auth: ", profile);

                    return true;
                } else {
                    const userExists = await User.findOne({
                        email: user.email
                    });

                    if (!userExists) {
                        await User.create({
                            name: user.name,
                            phone: user.phone,
                            location: user.location,
                            email: user.email,
                            password: user.password
                        })
                    }

                    console.log("This is user next auth: ",user)

                    return true;
                }

            } catch (e) {
                console.log("Error checking if user exists: ", e.message);
                return false;
            }
        }
    }
})

export { handler as GET, handler as POST };