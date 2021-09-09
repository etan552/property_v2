import { FieldError } from "../types/error";
import { Property } from "../models/Property";

export const validate = (property: Property): FieldError[] => {
  const errors: FieldError[] = [];
  if (property.address.city !== "Auckland") {
    errors.push({ field: "city", message: "Invalid city" });
  }
  return errors;
};
