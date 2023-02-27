import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { FetchAllTrabalhos } from "../../../api/findall-trabalhos";

export const AllTrabalhosTable = () => {
  const [trabalhos, setTrabalhos] = useState([]);

  const handleTrabalhos = async () => {
    const data = await FetchAllTrabalhos();

    setTrabalhos(data);
  };

  useEffect(() => {
    handleTrabalhos();
  }, []);

  return (
    <Table responsive striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Link</th>
          <th>Subject</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {trabalhos.map((trabalhos) => 
          <tr>
            <td>{trabalhos.id}</td>
            <td>{trabalhos.title}</td>
            <td>{trabalhos.link}</td>
            <td>{trabalhos.subject}</td>
            <td>{trabalhos.image_url}</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
