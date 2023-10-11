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

export const PUT = async ( request, { params }) => {
    const { status, description, date, startTime, creditBalance } = await request.json();

    try {
        await connectToDB();

        const existingShow = await Show.findById(params.id);

        if (!existingShow) return NextResponse.json({ status: 500, error: "Show Not Found"});

        existingShow.status = status;
        existingShow.description = description;
        existingShow.date = date;
        existingShow.startTime = startTime;
        existingShow.creditBalance = creditBalance;

        await existingShow.save();

        return NextResponse.json({ status: 200, data: existingShow });


    } catch (e) {
        return NextResponse.json({ status: 500, error: e.message });
    }
}