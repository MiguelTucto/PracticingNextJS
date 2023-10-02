import { connectToDB } from "@utils/database";
import Show from "@models/show";
import {NextResponse} from "next/server";


export const GET = async () => {
    try {
        await connectToDB();

        const shows = await Show.find({}).populate('creator');

        return NextResponse.json({ status: 200, data: shows })

    } catch (e) {
        return NextResponse.json({ status: 500, error: e.message });
    }
}