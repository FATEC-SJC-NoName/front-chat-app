import Client from "./client";

interface ChatServiceInterface {
  fetchAllChats(): Promise<any>;
  createChat(body: any): Promise<any>;
}

export default class ChatService implements ChatServiceInterface {
  private client: Client;
  private readonly servicePath = "/chats";

  constructor() {
    this.client = new Client("http://localhost:8080");
  }

  async fetchAllChats(): Promise<any> {
    return await this.client.instance.get(this.servicePath);
  }

  async createChat(body: any): Promise<any> {
    return await this.client.instance.post(this.servicePath, body);
  }
}
