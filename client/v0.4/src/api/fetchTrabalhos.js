import { Api } from "./Api"

export const FetchTrabalhos = async function(){

    const subject = localStorage.getItem("materia");

    const response = await Api.get(`/findTrabalhosBySubject/subject=${subject}`,)

    const data = await response.data;

    return data;
}

