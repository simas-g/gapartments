import connect from "@/lib/mongodb"
import Property from "@/lib/property";
import { NextResponse } from "next/server";
export const GET = async (req) => {
    const db = await connect();
    const {searchParams} = new URL(req.url);
    const id = searchParams.get('id')
    const property = await Property.findOne({id: id + '/'})
    return NextResponse.json({property}, {status: 200})
}