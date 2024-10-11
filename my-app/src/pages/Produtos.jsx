import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
const url = "http://localhost:5000/produtos"
import Styler from "../styles/Login.module.css"

const Produtos = () => {

    const[Produto, setProduto] = useState([]);


    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(url);
                const prod = await res.json();
                setProduto(prod);

            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData();
        console.log(error.message);

    }, []);

  return (
    <div className={Styler.body}>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Produto</th>
          <th>Classe</th>
          <th>Preço</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
            {Produto.map((prod) => (
                <tr key={prod.id}>
                    <td>{prod.id}</td>
                    <td>{prod.nome}</td>
                    <td>{prod.categoria}</td>
                    <td>{prod.preco}</td>
                    <td></td>
                </tr>
            ))}
      </tbody>
        </Table>
    </div>
  )
}

export default Produtos