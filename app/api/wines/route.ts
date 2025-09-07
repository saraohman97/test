import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

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

    const wine = await prisma.wine.create({
        data: {
            name, 
        }
    })

    return NextResponse.json(wine)
}

export async function GET() {
    const wines = await prisma.wine.findMany()

    return NextResponse.json(wines)
}