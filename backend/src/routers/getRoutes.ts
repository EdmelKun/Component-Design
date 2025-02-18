import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World SE bleehehh");
});

export default router;
