import { NextResponse } from "next/server"
import data from "@/data.json"

export async function GET(request: Request, context:any) {
    const {params} = context
    const article = data.find(art=> art.slug == params.slug)
    return NextResponse.json(article)
}