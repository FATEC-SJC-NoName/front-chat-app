import { MessageModel } from "@/models";
import { MessageService } from "@/services";
import { DefaultErrorResponse } from "./defaultError";

interface MessageRepositoryInterface {
  fetchAll(): Promise<[MessageModel] | DefaultErrorResponse>;
  create(request: any): Promise<MessageModel | DefaultErrorResponse>;
}

export default class MessageRepository implements MessageRepositoryInterface {
  private readonly messageService: MessageService;

  constructor() {
    this.messageService = new MessageService();
  }
  async create(request: any): Promise<MessageModel | DefaultErrorResponse> {
    const response = await this.messageService.create(request);

    if (response.data.error) {
      const error: DefaultErrorResponse = response.data.error;

      return error;
    }

    const model: MessageModel = response.data;

    return model;
  }

  async fetchAll(): Promise<[MessageModel] | DefaultErrorResponse> {
    const response = await this.messageService.fetchAll();

    if (response.data.error) {
      const error: DefaultErrorResponse = JSON.parse(response.data.error);

      return error;
    }

    return response.data;
  }
}
