import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartItem from '../Cart/CartItem';

const CardCarDetail = ({ items, total, currency, removeFromCart, iva }) => {
  const navigate = useNavigate();
  const location = useLocation()

  const showButtons = location.pathname !== '/detalle-compra';

  return (
    <div className="panel panel-default">
      <div className="panel-body">
        {items?.length > 0 && (
          <div className="cart__body">
            {items.map(item => (
              <CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)} showButtons={showButtons}/>
            ))}
          </div>
        )}
        {items.length === 0 && (
          <div className="alert alert-info">Cart is empty</div>
        )}
        <div className="cart__total">Iva: {iva.toFixed(2)} {currency}</div>
        <div className="cart__total">Total: {total.toFixed(2)} {currency}</div>
        {
          showButtons && total > 0 && <button onClick={() => navigate("/detalle-compra")}>
            Pagar
          </button>
        }
      </div>
    </div>
  )
}

CardCarDetail.propTypes = {
  items: PropTypes.array,
  total: PropTypes.number,
  iva: PropTypes.number,
  currency: PropTypes.string,
  removeFromCart: PropTypes.func.isRequired,
  showButtons: PropTypes.bool
}

export default CardCarDetail