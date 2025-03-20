import { NextResponse } from "next/server"
import data from "@/data.json"
import { Titles } from "@/types"

export async function GET() {
    let titles:Titles[] = [] 
    data.map(art=> titles.push({title: art.articleName, slug: art.slug}))
    return NextResponse.json(titles)
}