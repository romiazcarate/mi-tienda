import React from 'react';

const ItemListContainer = ({ mensaje }) => {
    return (
        <div className="item-list-container">
            <h2>{mensaje}</h2>
            {/* Aquí puedes agregar el código para mostrar el catálogo de productos */}
        </div>
    );
};

export default ItemListContainer;