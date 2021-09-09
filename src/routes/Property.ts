import express from "express";
import { PropertyModel } from "../models/Property";

export const propertyRouter = express.Router();

propertyRouter.get("/", async (_, res) => {
  const properties = await PropertyModel.find();
  res.send(properties);
});

propertyRouter.post("/", (req, res) => {});

propertyRouter.put("/", (req, res) => {});
propertyRouter.delete("/", (req, res) => {});
