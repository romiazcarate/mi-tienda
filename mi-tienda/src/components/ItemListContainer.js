import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './itemListContainer.css';
import { Link } from 'react-router-dom';


const ItemListContainer = ({ mensaje }) => {

    // Estado para almacenar los productos y el estado de carga
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    // Obtener el parámetro categoryId de la URL
    const { categoryId } = useParams();

    // useEffect para cargar y filtrar los productos
    useEffect(() => {
        setLoading(true);

        // Simulación de una llamada a una API o fuente de datos con Promises
        const fetchData = new Promise((resolve) => {
            setTimeout(() => {
                // Datos de ejemplo: aquí debes colocar tu array real de productos
                const mockProductos = [
                    { id: 1,
                        categoria: 'Color unico',
                        nombre: 'Producto 1',
                        imagen: '/images/colorUnico1.jpeg',
                        descripcion: 'Pintura roja de alta calidad, ideal para interiores.',
                     },
                    { id: 2,
                        categoria: 'Color unico',
                        nombre: 'Producto 2',
                        imagen: '/images/colorUnico2.jpeg',
                        descripcion: 'Pintura roja de alta calidad, ideal para interiores.',
                     },
                    { id: 3,
                        categoria: 'Colores varios',
                        nombre: 'Producto 1',
                        imagen: '/images/colorVario1.jpeg',
                        descripcion: 'Pintura roja de alta calidad, ideal para interiores.',
                     },
                     { id: 4,
                        categoria: 'Colores varios',
                        nombre: 'Producto 2',
                        imagen: '/images/colorVario2.jpeg',
                        descripcion: 'Pintura roja de alta calidad, ideal para interiores.',
                     },
                     { id: 5,
                        categoria: 'Pintura total',
                        nombre: 'Producto 1',
                        imagen: '/images/pintura1.jpeg',
                        descripcion: 'Pintura roja de alta calidad, ideal para interiores.',
                     },
                     { id: 6,
                        categoria: 'Pintura total',
                        nombre: 'Producto 2',
                        imagen: '/images/pintura2.jpeg',
                        descripcion: 'Pintura roja de alta calidad, ideal para interiores.',
                     },
                ];
                if (categoryId) {
                    const normalizedCategoryId = categoryId.toLowerCase().replace(/%20/g, ' '); // Normaliza solo si categoryId existe
                    const filteredProducts = mockProductos.filter(
                        (item) => item.categoria.toLowerCase() === normalizedCategoryId
                    );
                    resolve(filteredProducts);
                } else {
                    resolve(mockProductos); // Si no hay categoría, devuelve todos los productos
                }
            }, 1000);
        });
    
        fetchData.then((data) => {
            setProductos(data);
            setLoading(false);
        });
    }, [categoryId]);

    return (
        <div className="item-list-container">
        <h2>{categoryId ? `Categoría: ${categoryId}` : mensaje}</h2>
        {loading ? (
            <p>Cargando...</p>
        ) : (
            <div className="productos-grid">
                {productos.map((producto) => (
                    <div key={producto.id} className="producto-card">
                        <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
                        <h3>{producto.nombre}</h3>
                        <p>{producto.descripcion}</p>
                        <Link to={`/item/${producto.id}`} className="ver-detalle-btn">Ver detalle</Link>
                    </div>
                ))}
            </div>
        )}
    </div>
);
};

export default ItemListContainer;