import { getS3ImageUrls } from '@/app/actions/getS3Images';
import { geocoding } from '@/app/actions/geocoding';
import { properties } from './properties';
const fetchPropertyData = async (id) => {
  console.log(id, 'id')
    try {
      const propertyDoc = properties.find((p) => p.id === id + '/')
      const images = await getS3ImageUrls(propertyDoc?.id);
      const location = await geocoding(propertyDoc?.title);
  
      return {
        ...propertyDoc,
        images: images.length > 1 ? images.slice(1) : images,
        location,
      };
    } catch (error) {
      console.error('Error fetching property data:', error);
      return null;
    }
  };
  export default fetchPropertyData