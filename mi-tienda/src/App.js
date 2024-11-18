// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
            <Route path="/" element={<ItemListContainer mensaje="¡Bienvenido a nuestra tienda!" />} />
                <Route path="/category/:categoryId" element={<ItemListContainer mensaje="Productos filtrados por categoría" />} />
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
            </Routes>
       </Router>
    );
};

export default App;