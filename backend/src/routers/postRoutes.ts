import { Router } from "express";

const router = Router();

router.post("/send-message", (req, res) => {

  const message = "Post created successfully";

  res.status(200).json({ message });
});

router.get("/", (req, res) => {
  const message = "Get all posts";
  res.status(200).json({ message });
});

export default router;
