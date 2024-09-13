import axios from 'axios';
import React, { useRef } from 'react'
import { toast }from 'react-toastify'
import { Button, FormContainer, Input, Label } from '../styles/Form.js';

export const Form = () => {

    const ref = useRef();
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const book = ref.current;
        
        if (!book.titulo.value || !book.autor.value || !book.editora.value) {
            return toast.warn("Preencha todos os campos do formulário!")
        }
        
        await axios.post("http://localhost:3333", {
            titulo: book.titulo.value,
            autor: book.autor.value,
            editora: book.editora.value,
        })
        .then(() => toast.success("Cadastrado com sucesso!"))
        .catch(() => toast.error("Não foi possível cadastrar!!"))
    };
    
    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <Label>Titulo</Label>
            <Input name='titulo'/>
            <Label>Autor(a)</Label>
            <Input name='autor'/>
            <Label>Editora</Label>
            <Input name='editora'/>
            <Button type='submit'>Adicionar</Button>
        </FormContainer>
    )
}

export default Form;