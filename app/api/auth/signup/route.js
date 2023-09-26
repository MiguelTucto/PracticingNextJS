import {connectToDB} from "@utils/database";
import User from "@models/user";
import  bcrypt  from 'bcryptjs';
import { NextRequest, NextResponse } from "next/server";

export async function POST(request){
    try {

        await connectToDB();
        const reqBody = await request.json();
        const { name, phone, location, email, password } = reqBody;

        console.log(reqBody);

        // Check if user exists
        const user = await User.findOne({ email })

        if (user) {
            return NextResponse.json({ error: "User already exists", user});
        } else {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const newUser = new User({
                name,
                phone,
                location,
                email,
                password: hashedPassword
            })
            await newUser.save();
            return NextResponse.json({ status: 201 });
        }
    } catch (error) {
        return NextResponse.json({ status: 500, error: error.message });
    }
}