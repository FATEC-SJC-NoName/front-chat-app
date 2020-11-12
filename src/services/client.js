import { create } from "axios";

export const client = create({
  baseURL: "http://localhost:8080",
  timeout: 1000
});
