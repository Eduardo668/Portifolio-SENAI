import { Api } from "./Api"

 

export const DeleteTrabalho = async (trabalho_id)=>{

    const response = await Api.delete("/deleteTrabalho/trabalho_id="+trabalho_id);

    if (response.status == 200){
        alert("Trabalho deletado com sucesso")
    }

}