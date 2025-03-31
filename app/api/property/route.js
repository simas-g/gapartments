import connect from "@/lib/mongodb"
import Property from "@/lib/property";
import { NextResponse } from "next/server";
export const GET = async (req) => {
    await connect();
    const {searchParams} = new URL(req.url);
    const id = searchParams.get('id')
    const property = await Property.findOne({id})
    console.log('we foudn:: ', property)
    return NextResponse.json({property}, {status: 200})
}