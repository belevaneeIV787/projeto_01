import axios from 'axios'

import React, { useRef } from 'react'
import { toast } from 'react-toastify'
import { TableContainer, Th, Thead, Tr, Td, Tbody } from '../styles/Table'

const Table = ({ users }) => {

    const ref = useRef();

    const deleteRow = async (id) => {
        await axios.delete(`http://localhost:3333/${id}`)
        .then(({data}) => {
            toast.success(data)
        })
        .catch(() => toast.error("Não foi possível excluir o registro!"))
    }

    const updateRow = async (id) => {
        const book = ref.current();
        await axios.put(`http://localhost:3333/${id}`, {
            titulo: book.titulo.value,
            autor: book.autor.value,
            editora: book.editora.value,
        })
        .then(() => toast.success("Livro atualizado com sucesso!"))
    }
    return (
        <TableContainer>
            <Thead>
                <Tr>
                    <Th>Título</Th>
                    <Th>Autor(a)</Th>
                    <Th>Editora</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    users.map((item, i) => (
                        <Tr key={i}>
                            <Td>{item.titulo}</Td>
                            <Td>{item.autor}</Td>
                            <Td>{item.editora}</Td>
                            <Td><button onClick={() => deleteRow(item.id)}>Excluir</button></Td>
                            <Td><button onClick={() => updateRow(item.id)}>Editar</button></Td>
                        </Tr>
                    ))
                }
            </Tbody>
        </TableContainer>
    )
}

export default Table;