import { Schema, model, models } from 'mongoose';

const propertySchema = new Schema({
    name: {type: String, required: true},
    id: {type: String, required: true},
    description: {type: String, required: true},
    add: {type: Array, required: true},
    images: {type: Array, required: false},
    price: {type: Number, required: true},
})

const Property = models.Property || model("Property", propertySchema)
export default Property;