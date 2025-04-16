import { getPlaceId } from "@/lib/getPlaceId"
export default async function GET(req) {
    const {searchParams} = new URL(req.nextUrl)
    const place = searchParams.get('place')
    const placeId = getPlaceId(place)
    console.log(placeId)
    try {
    const res = await fetch(`https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews`)
    } catch (error) {
        console.log(error, 'error')
    }
}