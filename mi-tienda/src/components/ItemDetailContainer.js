// ItemDetailContainer.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const { categoryId } = useParams(); // Recibir el parámetro categoryId
    const [productos, setProductos] = useState([]); // Cambiar para manejar un array de productos
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = new Promise((resolve) => {
            setTimeout(() => {
                const mockProductos = [
                    { id: 1, categoria: 'Color unico', nombre: 'Producto 1', imagen: '/images/colorUnico1.jpeg', descripcion: 'Pintura roja de alta calidad, ideal para interiores.' },
                    { id: 2, categoria: 'Color unico', nombre: 'Producto 2', imagen: '/images/colorUnico2.jpeg', descripcion: 'Pintura roja de alta calidad, ideal para interiores.' },
                    { id: 3, categoria: 'Colores varios', nombre: 'Producto 1', imagen: '/images/colorVario1.jpeg', descripcion: 'Pintura roja de alta calidad, ideal para interiores.' },
                    { id: 4, categoria: 'Colores varios', nombre: 'Producto 2', imagen: '/images/colorVario2.jpeg', descripcion: 'Pintura roja de alta calidad, ideal para interiores.' },
                    { id: 5, categoria: 'Pintura total', nombre: 'Producto 1', imagen: '/images/pintura1.jpeg', descripcion: 'Pintura roja de alta calidad, ideal para interiores.' },
                    { id: 6, categoria: 'Pintura total', nombre: 'Producto 2', imagen: '/images/pintura2.jpeg', descripcion: 'Pintura roja de alta calidad, ideal para interiores.' },
                ];

                // Filtrar los productos por categoría
                const filteredProducts = mockProductos.filter(
                    (item) => item.categoria.toLowerCase() === categoryId.toLowerCase()
                );
                resolve(filteredProducts);

            }, 1000);
        });

        fetchData.then((data) => {
            setProductos(data);
            setLoading(false); // Finalizar la carga

        });
    }, [categoryId]);

    return (
        <div>
        {loading ? (
            <p>Cargando...</p>
        ) : productos.length > 0 ? (
            <div>
                <h2>Productos en la categoría: {categoryId}</h2>
                <div className="productos-grid">
                    {productos.map((producto) => (
                        <div key={producto.id} className="producto-card">
                            <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
                            <h3>{producto.nombre}</h3>
                            <p>{producto.descripcion}</p>
                        </div>
                    ))}
                </div>
            </div>
        ) : (
            <p>No hay productos disponibles para esta categoría.</p>
        )}
    </div>
);
};

export default ItemDetailContainer;