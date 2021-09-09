import { User } from "../models/User";
import { FieldError } from "../types/error";

export const validateUser = (user: User): FieldError | null => {
  if (!user.email.includes("@")) {
    return { field: "email", message: "Invalid email" };
  }

  // if()
  return null;
};
