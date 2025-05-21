import React from "react";
import ContactForm from "../components/ContactForm";
import { useDispatch } from "react-redux";
import { adicionarContato } from "../store/reducers/contatos";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; // usar para gerar ids unicos para facilitar a remoção de contatos.
import styled from "styled-components";

const PageTitle = styled.h2`
	text-align: center;
	margin-bottom: 20px;
`;

const AddContact: React.FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	//lembrar de usar uuid para gerar ids aqui
	const handleAdd = (data: {
		nome: string;
		email: string;
		telefone: string;
	}) => {
		dispatch(adicionarContato({ id: uuidv4(), ...data }));
		navigate("/");
	};

	return (
		<div>
			<PageTitle>Adicionar Contato</PageTitle>
			<ContactForm onSubmit={handleAdd} />
		</div>
	);
};

export default AddContact;
