import {connectToDB} from "@utils/database";
import User from "@models/user";
import  bcrypt  from 'bcryptjs';
import { NextRequest, NextResponse } from "next/server";

export async function POST (request) {
    try {
        await connectToDB();
        const reqBody = await request.json();
        const { email, password } = reqBody;
        console.log(reqBody);

        // Check if user exists
        const user = await User.findOne({ email })
        if (!user) {
            return NextResponse.json({ error: "User doesn't exist", status: 400})
        }
        console.log("User exists!");

        // Check if password is correct


        return NextResponse.json({ status: 201 });
    } catch (error) {
        return NextResponse.json({ status: 500, error: error.message });
    }
}