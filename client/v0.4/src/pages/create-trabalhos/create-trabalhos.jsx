import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import { PostTrabalhoData } from "../../api/cadastrarTrabalho";
import { DeleteTrabalho } from "../../api/delete-trabalho";
import { storage } from "../../api/firebase";
import { Container, ContainerForm, Form } from "./style";

export const CreateTabalhos = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [subject, setSubject] = useState("");
  const [img_url, setImgUrl] = useState("");
  const [trabalho_id, setTrabalhoId] = useState(0);
  
  let trabalho = {
    "title": undefined,
    "link": undefined,
    "subject": undefined,
    "image_url": undefined
  }

  const [file, setFile] = useState();

  const handleFileImage = (file) => {
    setFile(file.target.files[0]);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value)
  };
  const handleLink = (e) => {
    setLink(e.target.value)
  };
  const handleSubject = (e) => {
    setSubject(e.target.value)
  };
  const handleImageUrl = (e) => {
     setImgUrl(e);
  };

  const handleTrabalhoId = (e)=>{
    setTrabalhoId(e.target.value)
  }

  const deleteTrabalho = ()=>{
     DeleteTrabalho(trabalho_id);
  }


  const createTrabalho = async () => {
    setTimeout(()=>{
        trabalho.title = title;
        trabalho.link = link;
        trabalho.subject = subject;
        trabalho.image_url = img_url;
        PostTrabalhoData(trabalho);
        console.log(trabalho)
    }, 7000)

  };

  const handleUploadImage = (event) => {
    const storage_ref = ref(storage, `images/${file.name}`);
    const upload_task = uploadBytesResumable(storage_ref, file);
    upload_task.on(
      "state_changed",
      (snapshot) => {
        var a = 1;
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(upload_task.snapshot.ref).then((url) => {
          handleImageUrl(url);
          console.log(url);
        });
      }
    );
  };

  return (
    <>
      <Container>
        <ContainerForm>
          <div className="form-title-div">
            <h1 className="form-title">Cadastrar Trabalhos</h1>
          </div>
          <Form>
            <div className="div-input-label">
              <label className="label">Title</label>
              <input onChange={handleTitle} className="input" type="text" />
            </div>
            <div className="div-input-label">
              <label className="label">Link</label>
              <input onChange={handleLink} className="input" type="text" />
            </div>
            <div className="div-input-label">
              <label className="label">Materia</label>
              <input onChange={handleSubject} className="input" type="text" />
            </div>
            <div className="div-input-label">
              <label className="label">Image</label>
              <input className="input" onChange={handleFileImage} type="file" />
            </div>
            <div className="div-input-label">
              <label className="label">Trabalho id para deletar</label>
              <input onChange={ handleTrabalhoId } className="input" type="text" />
              <button onClick={deleteTrabalho} >Deletar trabalho</button>
            </div>
            
          </Form>
          <button onClick={handleUploadImage} className="btn-cadastrar">
              Cadastrar Imagem
            </button>
            <button onClick={createTrabalho} className="btn-cadastrar">
              Cadastrar trabalho
            </button>
        </ContainerForm>
       
      </Container>
    </>
  );
};
