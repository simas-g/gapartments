import { getPlaceId } from "@/lib/getPlaceId";

import { NextResponse } from "next/server";
export async function GET(req) {

  const { searchParams } = new URL(req.nextUrl);
  const place = searchParams.get("place");
  const locale = searchParams.get('language')
  const placeId = await getPlaceId(place);
  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(placeId)}&key=${process.env.REACT_APP_MAPS_API_KEY}&language=${locale}`
    );
    const data = await res.json();
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.log(error, "error");
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
