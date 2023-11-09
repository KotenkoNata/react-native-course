const key = process.env.EXPO_GOOGLE_API_KEY;

export function getMapPreview(lat, lng) {
    return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${key}`;
}

export async function getAddress(lat, lng) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${key}`
    const response = await fetch(url);

    if(!response.ok){
        throw new Error('Failed to fetch address!')
    }

    const data = await response.json();
    return data.results[0].formatted_address;
}