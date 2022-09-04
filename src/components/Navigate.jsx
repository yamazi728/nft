import { Link } from 'react-router-dom'
import Carousdown from './Carousdown'
const Navigate = () => {
	return (
		<div>
			<div className='line'></div>
			<div className='dws-wrapper'>
				<h5> You need to know...</h5>
				<div className='boxImg'>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTTjhC3hxUPEj5LDnOwvlK-6fzqn9C8TeISxTYDNnJlIC3tOGn9rTFoZ5paaNLpkO6HRo&usqp=CAU'
						alt='Природа'
					/>
					<div className='container'>
						<div className='text'>
							<h1>Some info about nft</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Perferendis, suscipit?
							</p>
							<Link to='/more' className='bt'>
								Подробнее
							</Link>
						</div>
					</div>
				</div>
				<div className='boxImg'>
					<img
						src='https://s32659.pcdn.co/wp-content/uploads/2022/01/NFT-wallets.jpg.optimal.jpg'
						alt='Природа'
					/>
					<div className='container'>
						<div className='text'>
							<h1>SIGN up your wallet</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Perferendis, suscipit?
							</p>
							<Link to='/wallet' className='bt'>
								Подробнее
							</Link>
						</div>
					</div>
				</div>
			</div>
			{/* <div className='line-2'></div> */}
			<Carousdown />
		</div>
	)
}

export default Navigate
