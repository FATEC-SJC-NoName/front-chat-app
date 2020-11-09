import Client from "./client";

interface ActivitieServiceInterface{
    fetchAllActivities(): Promise<any>;
    createActivitie(body: any): Promise<any>;
}

export default class ActivitieService implements ActivitieServiceInterface{
    private client: Client;
    private readonly servicePath = "/atividades";

    constructor(){
        this.client = new Client("http://localhost:8080");
    }
    async fetchAllActivities(): Promise<any> {
       return await this.client.instance.get(this.servicePath);
    }
    async createActivitie(body: any): Promise<any> {
       return await this.client.instance.post(this.servicePath, body);
    }

  
}