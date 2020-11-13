import { create } from "axios";

export const client = create({
  baseURL: "http://54.197.32.150:8080",
  timeout: 1000
});
