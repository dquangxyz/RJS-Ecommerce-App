import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart'
import './ListCart.css'

const formatCurrency = (num) => {
  return (+num).toLocaleString('vi')
}

const ListCart = (props) => {
  // global state
  const dispatch = useDispatch()
  const listCart = useSelector(state => state.cart.listCart)

  // handler functions
  const handlerDecrease = (id, qty) => {
    if (qty > 0){
      dispatch(cartActions.updateCart({ id, qty: qty -1 }))
    }
  }
  const handlerIncrease = (id, qty) => {
    dispatch(cartActions.updateCart({ id, qty: qty +1 }))
  }
  const handlerDeleteCart = (id) => {
    dispatch(cartActions.deleteCart({id}))
  }

  let totalValue = 0

  return (
    <div className='cart-main'>
      <table>
        <tr>
          <th style={{width: '10%'}}>IMAGE</th>
          <th style={{width: '30%'}}>PRODUCT</th>
          <th style={{width: '10%'}}>PRICE</th>
          <th style={{width: '10%'}}>QUANTITY</th>
          <th style={{width: '10%'}}>TOTAL</th>
          <th style={{width: '10%'}}>REMOVE</th>
        </tr>

        {listCart.map((item, index) => {
          totalValue += item.price * item.qty
          return (
            <tr>
              <td>(image)</td>
              <td className='cart-item-name'>{item.name}</td>
              <td className='cart-item-price'>{formatCurrency(item.price)} VND</td>
              <td>
                <div className='cart-item-quantity'>
                  <button onClick={() => handlerDecrease(item.id, item.qty)}> &#60; </button>               
                  <div>{item.qty}</div>
                  <button onClick={() => handlerIncrease(item.id, item.qty)}> &#62; </button>
                </div>
              </td>
              <td className='cart-item-total-cost'>{formatCurrency(item.price * item.qty)} VND</td>
              <td><button onClick={() => handlerDeleteCart(item.id)} className='btn-delete'><i class="fas fa-trash-alt"></i></button></td>
            </tr>
          )    
        })}

        {props.onCalculate(formatCurrency(totalValue))}

     </table>

  </div>
  )
}

export default ListCart