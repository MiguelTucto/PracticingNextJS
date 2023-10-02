import Show from "@models/show";
import { connectToDB } from "@utils/database";
import {NextResponse} from "next/server";

export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        const show = await Show.findById(params.id).populate('creator');
        if (!show) return NextResponse.json({ status: 404, error: "Show not found"});

        return NextResponse.json({ status: 200, data: show });

    } catch (e) {
        return NextResponse.json({ status: 500, error: e.message });
    }
}