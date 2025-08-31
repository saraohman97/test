import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

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

    const wine = await prismadb.wine.create({
        data: {
            name, 
        }
    })

    return NextResponse.json(wine)
}