import { client } from "./client";

async function login({ username, password }) {
  client.defaults.headers.common["Authorization"] = undefined;
  const body = {
    username,
    password
  };

  const response = await client.post("/authentication", body);
  return response.data;
}

async function me({ jwt }) {
  client.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
  const response = await client.get("/users/me");

  return response.data;
}

async function createActivity({ userId, isActive, title, description, jwt }) {
  client.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

  const body = {
    userId,
    isActive,
    title,
    description
  };

  const response = await client.post("/activities", body);
  console.log(response);
  return response.data;
}


export { createActivity, login, me };
