export async function geocoding(address) {
    const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.MAPS_API_KEY}`)
    const data = await res.json();
    if (data.status === 'OK') {
        const location = {
            lat: data.results[0].geometry.location.lat,
            lng: data.results[0].geometry.location.lng,
        };
        console.log('our location: ',location)
        return location;
    } else {
        console.error('Geocoding error:', data.status);
        return null;
    }
}