import connect from "./mongodb";
import Property from './property'
import { getS3ImageUrls } from '@/app/actions/getS3Images';
import { geocoding } from '@/app/actions/geocoding';
const fetchPropertyData = async (id) => {
    await connect();
  
    try {
      const propertyDoc = await Property.findOne({ id: id + '/' });
      const {_id, ...safeProperty} = propertyDoc.toObject();
      const images = await getS3ImageUrls(safeProperty?.id);
      const location = await geocoding(safeProperty?.title);
  
      return {
        ...safeProperty,
        images: images.length > 1 ? images.slice(1) : images,
        location,
      };
    } catch (error) {
      console.error('Error fetching property data:', error);
      return null;
    }
  };
  export default fetchPropertyData