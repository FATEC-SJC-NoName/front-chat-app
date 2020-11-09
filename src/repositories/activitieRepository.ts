import ActivitieModel from "@/models/activitieModel";

import { ActivitieService } from "../services";

type ActivitieErrorResponse = { 
    message: string;
    code: number;
 };


interface ActivitieRepositoryInterface{
    fetchAll(): Promise<[ActivitieModel] | ActivitieErrorResponse>;
    createActivitie(request: any): Promise<ActivitieModel | ActivitieErrorResponse>;
}

export default class ActivitieRepository implements ActivitieRepositoryInterface{
    private readonly activitieService: ActivitieService;

    constructor(){
        this.activitieService = new ActivitieService();
    }

    async createActivitie(request: any): Promise<ActivitieModel | ActivitieErrorResponse> {
        const response = await this.activitieService.createActivitie(request);

        if(response.data.error){
            const error: ActivitieErrorResponse = response.data.error;
            return error;
        }
        
        const model: ActivitieModel = response.data;
        return model;
    }

    async fetchAll(): Promise<[ActivitieModel] | ActivitieErrorResponse> {
        const response = await this.activitieService.fetchAllActivities();

        if(response.data.error){
            const error: ActivitieErrorResponse = JSON.parse(response.data.error);
            return error;
        }

        return response.data;
    }
 
}