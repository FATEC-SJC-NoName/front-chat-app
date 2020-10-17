import Client from "./client";

interface MessageServiceInterface {
  fetchAll(): Promise<any>;
  create(body: any): Promise<any>;
}

export default class MessageService implements MessageServiceInterface {
  private client: Client;
  private readonly servicePath = "/messages";

  constructor() {
    this.client = new Client("http://localhost:8080");
  }
  fetchAll(): Promise<any> {
    return this.client.instance.get(this.servicePath);
  }
  create(body: any): Promise<any> {
    return this.client.instance.post(this.servicePath, body);
  }
}
