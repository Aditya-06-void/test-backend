import express from "express";
import { getRandomUser, updateUserById } from "./db/inMemoryDb";
import { UserDetailsUpdate } from "./types";

const app = express();
app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/api/users/random", (_req, res) => {
  const user = getRandomUser();
  res.status(200).json(user);
});

app.put("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: "Invalid user id" });
  }

  const { name, email, role, city } = req.body as UserDetailsUpdate;
  const hasValidPayload =
    [name, email, role, city].some((value) => typeof value === "string") &&
    Object.keys(req.body).every((key) => ["name", "email", "role", "city"].includes(key));

  if (!hasValidPayload) {
    return res.status(400).json({ error: "Payload must include one or more valid fields: name, email, role, city" });
  }

  const updatedUser = updateUserById(id, { name, email, role, city });
  if (!updatedUser) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.status(200).json(updatedUser);
});

export default app;

