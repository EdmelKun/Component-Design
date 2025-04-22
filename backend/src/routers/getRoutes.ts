import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();

router.get("/", async (req, res) => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      age: 20,
    },
    {
      id: 2,
      name: "Jane Doe",
      age: 19,
    },
    {
      id: 3,
      name: "John Smith",
      age: 56,
    },
    {
      id: 4,
      name: "Jane Smith",
      age: 55,
    },
    {
      id: 5,
      name: "Johnny Bravo",
      age: 20,
    },
  ];

  res.json(data);
});

export default router;
