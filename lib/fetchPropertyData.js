import connect from "./mongodb";
import Property from './property'
import { getS3ImageUrls } from '@/app/actions/getS3Images';
import { geocoding } from '@/app/actions/geocoding';
const fetchPropertyData = async (id) => {
    await connect();
  
    try {
      const propertyDoc = await Property.findOne({ id: id + '/' });
      const property = propertyDoc.toObject();
        console.log(property)
      const images = await getS3ImageUrls(property?.id);
      const location = await geocoding(property?.title);
  
      return {
        ...property,
        images: images.length > 1 ? images.slice(1) : images,
        location,
      };
    } catch (error) {
      console.error('Error fetching property data:', error);
      return null;
    }
  };
  export default fetchPropertyData