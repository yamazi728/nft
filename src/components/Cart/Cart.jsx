import React from 'react'
import { BiCartAlt } from 'react-icons/bi'
import { useSelector } from 'react-redux'

const Cart = () => {
	const items = useSelector(state => state.cart.itemsInCart)
	const totalPrice = items.reduce((acc, products) => (acc += products.price), 0)
	return (
		<div>
			<div className='cart-block'>
				<BiCartAlt size={25} color='#fff' className='cart-block__icon' />
				<span className='cart-block__total-price'> {totalPrice} coin</span>
			</div>
		</div>
	)
}

export default Cart
