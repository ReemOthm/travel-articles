import { NextResponse } from "next/server"
import data from "@/data.json"

export async function GET(request: Request, context:any) {
    const {params} = await context 
    const slug = (await params).slug
    const article = data.find(art=> art.slug == slug)
    return NextResponse.json(article)
}