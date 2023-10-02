import {connectToDB} from "@utils/database";
import Show from "@models/show";
import { NextRequest, NextResponse } from "next/server";

export async function POST ( request ) {
    try {
        await connectToDB();
        const reqBody = await request.json();
        const { userId, status, description, date, startTime, creditBalance } = reqBody;

        const newShow = new Show({
            creator: userId,
            status,
            description,
            date,
            startTime,
            creditBalance
        })

        await newShow.save();

        return NextResponse.json({ status: 201 });
    } catch (e) {
        return NextResponse.json({ error: "Failed to create a new Show", status: 500 })
    }
}