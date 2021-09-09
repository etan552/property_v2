import { model, Schema } from "mongoose";
import { FieldError } from "../types/error";

export interface User {
  name: string;
  email: string;
  password: string;
}

export interface UserResponse {
  user: User;
  errors: FieldError[];
}

const schema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export default model<User>("User", schema);
