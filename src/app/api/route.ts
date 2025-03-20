import { NextResponse } from "next/server"
import data from "@/data.json"

export async function GET() {
    return NextResponse.json(data)
}

export async function POST(request:Request) {
    const post = await request.json()
    data.unshift({...post, id: data.length + 1})
    return NextResponse.json(data)
}