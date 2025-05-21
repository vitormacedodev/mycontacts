import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact";
import { GlobalStyle } from "./styles/GlobalStyle";

const App: React.FC = () => {
	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/adicionar" element={<AddContact />} />
				<Route path="/editar/:id" element={<EditContact />} />
			</Routes>
		</>
	);
};

export default App;
