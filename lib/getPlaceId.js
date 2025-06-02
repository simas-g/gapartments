
export async function getPlaceId(place) {
  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(
        place
      )}&inputtype=textquery&fields=place_id&key=${process.env.REACT_APP_MAPS_API_KEY}`
    );
    if (!res.ok) {
      const errorText = await res.json();
      console.error("Google Maps API error:", errorText);
    }
    const data = await res.json();
    console.log(data, "data from getPlaceId");
    // const targetProperty = giedreApartments.find(p => p.title === )

    return data.candidates?.[0]?.place_id || null;
  } catch (error) {
    console.error("getPlaceId error:", error);
  }
}
