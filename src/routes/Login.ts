import express, { Request, Response } from "express";
import User from "../models/User";
import { FieldError } from "../types/error";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Check if user exist
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).send({
      field: "email",
      message: "Invalid email or password",
    } as FieldError);
  }

  // validate password
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return res.status(404).send({
      field: "password",
      message: "Invalid email or password",
    } as FieldError);
  }

  return res.send(user);
});

export { router as loginRouter };
