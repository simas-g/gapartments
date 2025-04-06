export async function geocoding(address) {
    const res1 = await fetch(`https://addressvalidation.googleapis.com/v1:validateAddress?key=${process.env.REACT_APP_MAPS_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address: {
        regionCode: "LT",
          addressLines: [address],
        },
      }),
    });
  
    const validationData = await res1.json();
  
    const validated = validationData.result?.address?.formattedAddress;
    if (!validated) {
      console.error("Address validation failed");
      return null;
    }    
    return validationData.result.geocode.location
  }
  