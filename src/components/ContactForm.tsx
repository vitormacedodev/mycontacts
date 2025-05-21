import React, { useState } from "react";
import styled from "styled-components";

interface ContactFormProps {
	initialData?: {
		nome: string;
		email: string;
		telefone: string;
	};
	onSubmit: (data: { nome: string; email: string; telefone: string }) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ initialData, onSubmit }) => {
	const [nome, setNome] = useState(initialData?.nome || "");
	const [email, setEmail] = useState(initialData?.email || "");
	const [telefone, setTelefone] = useState(initialData?.telefone || "");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit({ nome, email, telefone });
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Input
				type="text"
				placeholder="Nome completo"
				value={nome}
				onChange={(e) => setNome(e.target.value)}
				required
			/>
			<Input
				type="email"
				placeholder="E-mail"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			<Input
				type="tel"
				placeholder="Telefone"
				value={telefone}
				onChange={(e) => setTelefone(e.target.value)}
				required
			/>
			<Button type="submit">Salvar</Button>
		</Form>
	);
};

// ================ styles =====================
const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

const Input = styled.input`
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 6px;
	font-size: 16px;
`;

const Button = styled.button`
	background-color: #4caf50;
	color: white;
	padding: 12px;
	font-size: 16px;
	border: none;
	border-radius: 6px;
	cursor: pointer;
	transition: background-color 0.2s;

	&:hover {
		background-color: #45a049;
	}
`;

export default ContactForm;
