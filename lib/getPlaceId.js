
export async function getPlaceId(place) {
  if (!place) throw new Error("Missing place name");

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(
        place
      )}&inputtype=textquery&fields=place_id&key=${process.env.MAPS_API_KEY}`
    );

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Google Maps API error:", errorText);
      throw new Error("Error fetching from Google Maps API");
    }

    const data = await res.json();
    return data.candidates?.[0]?.place_id || null;
  } catch (error) {
    console.error("getPlaceId error:", error);
    throw new Error("Failed to fetch Place ID");
  }
}
