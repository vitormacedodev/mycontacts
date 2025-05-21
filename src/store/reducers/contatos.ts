import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Contato {
	id: string;
	nome: string;
	email: string;
	telefone: string;
}

interface ContatosState {
	contatos: Contato[];
}

// colocar aqui os contatos iniciais paara nao começar com a lista vazia
const initialState: ContatosState = {
	contatos: [
		{
			id: "1",
			nome: "Bob Esponja Calça Quadrada",
			email: "bob@fenda.com",
			telefone: "(11) 1234-5678",
		},
		{
			id: "2",
			nome: "Patrick Estrela",
			email: "patrick@estrela.com",
			telefone: "(21) 9876-5432",
		},
		{
			id: "3",
			nome: "Lula Molusco Tentáculos",
			email: "lula@molusco.com",
			telefone: "(31) 9999-0000",
		},
	],
};

//controle dos estados e acçoes aqui (remover, adicionar e outras)
const contatosSlice = createSlice({
	name: "contatos",
	initialState,
	reducers: {
		adicionarContato: (state, action: PayloadAction<Contato>) => {
			state.contatos.push(action.payload);
		},
		removerContato: (state, action: PayloadAction<string>) => {
			state.contatos = state.contatos.filter(
				(contato) => contato.id !== action.payload
			);
		},
		editarContato: (state, action: PayloadAction<Contato>) => {
			const index = state.contatos.findIndex(
				(contato) => contato.id === action.payload.id
			);
			if (index !== -1) {
				state.contatos[index] = action.payload;
			}
		},
	},
});

export const { adicionarContato, removerContato, editarContato } =
	contatosSlice.actions;
export default contatosSlice.reducer;
