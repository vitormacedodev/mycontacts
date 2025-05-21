import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { removerContato } from "../store/reducers/contatos";
import { useNavigate } from "react-router-dom";

const ContactList: React.FC = () => {
	const contatos = useSelector((state: RootState) => state.contatos.contatos);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleRemover = (id: string) => {
		dispatch(removerContato(id));
	};

	return (
		<ListContainer>
			{contatos.map((contato) => (
				<Card key={contato.id}>
					<ContactInfo>
						<strong>{contato.nome}</strong>
						<br />
						<span>{contato.email}</span>
						<br />
						<span>{contato.telefone}</span>
					</ContactInfo>
					<ButtonGroup>
						<Button
							color="#2196F3"
							onClick={() => navigate(`/editar/${contato.id}`)}
						>
							Editar
						</Button>
						<Button color="#f44336" onClick={() => handleRemover(contato.id)}>
							Remover
						</Button>
					</ButtonGroup>
				</Card>
			))}
		</ListContainer>
	);
};

// ================== styles aqui ========================
const ListContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const Card = styled.div`
	background: white;
	padding: 16px;
	border-radius: 8px;
	box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.1);
`;

const ContactInfo = styled.div`
	margin-bottom: 10px;
`;

const ButtonGroup = styled.div`
	display: flex;
	gap: 10px;
`;

const Button = styled.button<{ color: string }>`
	padding: 8px 12px;
	border: none;
	border-radius: 6px;
	color: white;
	cursor: pointer;
	background-color: ${({ color }) => color};

	&:hover {
		opacity: 0.9;
	}
`;

export default ContactList;
