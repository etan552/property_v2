import { model, Schema } from "mongoose";

export interface Property {
  name: string;
  address: {
    state: string;
    city: string;
    street: string;
    postCode: number;
  };
  price: number;
  bathroom: number;
  bedroom: number;
  description?: string;
}

const schema = new Schema<Property>({
  name: { type: String, required: true },
  address: {
    state: { type: String, required: true },
    city: { type: String, required: true },
    street: { type: String, required: true },
    postCode: { type: Number, required: true },
  },
  price: { type: Number, required: true },
  bathroom: { type: Number, required: true },
  bedroom: { type: Number, required: true },
  description: { type: String, required: false },
});

export const PropertyModel = model<Property>("Property", schema);
