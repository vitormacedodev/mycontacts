import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editarContato } from "../store/reducers/contatos";
import ContactForm from "../components/ContactForm";
import type { RootState } from "../store";
import styled from "styled-components";

const PageTitle = styled.h2`
	text-align: center;
	margin-bottom: 20px;
`;

const EditContact: React.FC = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const contato = useSelector((state: RootState) =>
		state.contatos.contatos.find((c) => c.id === id)
	);

	if (!contato) {
		return <p>Contato não encontrado.</p>;
	}

	const handleEdit = (data: {
		nome: string;
		email: string;
		telefone: string;
	}) => {
		dispatch(editarContato({ id: contato.id, ...data }));
		navigate("/");
	};

	return (
		<div>
			<PageTitle>Editar Contato</PageTitle>
			<ContactForm initialData={contato} onSubmit={handleEdit} />
		</div>
	);
};

export default EditContact;
