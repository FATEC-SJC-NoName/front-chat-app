import ChatModel from "@/models/chatModel";
import { ChatService } from "../services";

type ChatErrorResponse = {
  message: string;
  code: number;
};

interface ChatRepositoryInterface {
  fetchAll(): Promise<[ChatModel] | ChatErrorResponse>;
  createChat(request: any): Promise<ChatModel | ChatErrorResponse>;
}

export default class ChatRepository implements ChatRepositoryInterface {
  private readonly chatService: ChatService;

  constructor() {
    this.chatService = new ChatService();
  }
  async createChat(request: any): Promise<ChatModel | ChatErrorResponse> {
    const response = await this.chatService.createChat(request);

    if (response.data.error) {
      const error: ChatErrorResponse = response.data.error;

      return error;
    }

    const model: ChatModel = response.data;

    return model;
  }

  async fetchAll(): Promise<[ChatModel] | ChatErrorResponse> {
    const response = await this.chatService.fetchAllChats();

    if (response.data.error) {
      const error: ChatErrorResponse = JSON.parse(response.data.error);

      return error;
    }

    return response.data;
  }
}
