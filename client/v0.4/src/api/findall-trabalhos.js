import { Api } from "./Api"


export const FetchAllTrabalhos = async ()=>{

    const response = await Api.get("/findAll")


    return response.data;
}