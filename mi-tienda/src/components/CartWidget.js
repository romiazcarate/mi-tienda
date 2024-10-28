import React from 'react';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <img src="ruta-a-tu-icono-de-carrito.png" alt="Carrito" />
            <span>0</span> {/* Cambia el número según el estado del carrito */}
        </div>
    );
};

export default CartWidget;