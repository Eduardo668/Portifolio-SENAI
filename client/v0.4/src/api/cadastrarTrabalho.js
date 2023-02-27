import { Api } from "./Api"


export const PostTrabalhoData = async function(trabalho){

    const response =  await Api.post("/createTrabalho", trabalho);

    if (response.status == 200)
        alert("Trabalho cadastrado com sucesso");

}


