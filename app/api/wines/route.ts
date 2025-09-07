import { NextResponse } from "next/server";
import client from "@/lib/prismadb";

export async function POST(request: Request) {
    const body = await request.json();

    const {
        name
    } = body;

    Object.keys(body).forEach((value) => {
        if (!body[value]) {
            NextResponse.error();
        }
    })

    const data = await client.wine.create({
        data: {
            name, 
        }
    })

    return NextResponse.json(data)
}

export async function GET() {
    const wines = await client.wine.findMany()

    return NextResponse.json(wines)
}