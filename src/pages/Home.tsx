import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ContactList from "../components/ContactList";

const Home: React.FC = () => {
	const navigate = useNavigate();

	return (
		<Container>
			<Title>Lista de Contatos</Title>
			<AddButton onClick={() => navigate("/adicionar")}>
				+ Adicionar Contato
			</AddButton>
			<ContactList />
		</Container>
	);
};

// =================== styless =============

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const Title = styled.h1`
	text-align: center;
	color: #333;
`;

const AddButton = styled.button`
	padding: 12px;
	font-size: 16px;
	background-color: #673ab7;
	color: white;
	border: none;
	border-radius: 6px;
	cursor: pointer;
	transition: background-color 0.2s;

	&:hover {
		background-color: #5e35b1;
	}
`;

export default Home;
