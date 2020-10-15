import { ChatService } from "../services";

type ChatErrorResponse = {
  message: string;
  code: number;
};

interface ChatRepositoryInterface {
  fetchAllChats(): Promise<any> | Promise<ChatErrorResponse>
}

export default class ChatRepository implements ChatRepositoryInterface {
  private chartService: ChatService;
  
  constructor() {
    this.chartService = new ChatService("http://localhost:8080");
  }

async fetchAllChats(): Promise<any | ChatErrorResponse> {
    const response = await this.chartService.fetchAllChats();

    console.log(response)

    if (response.data.error) {
      const error: ChatErrorResponse = JSON.parse(response.data.error);
      
      return error;
    }

    return response.data;
  }

}