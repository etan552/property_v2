import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User";

export const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  // Making sure email is unique
  let user = await User.findOne({ email });
  if (user) {
    return res.send("This email has been taken.");
  }

  // hashing password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Saving user to db
  user = new User({ name, email, password: hashedPassword });
  user.save();

  return res.send(user);
});

export { router as registerRouter };
