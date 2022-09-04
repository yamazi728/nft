import images from '../images'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

const Carousdown = () => {
	const [width, setWidth] = useState(0)
	const carousel = useRef()

	useEffect(() => {
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
	}, [])

	return (
		<div>
			<div className='words'>
				<span>HOT STUFF</span>
				<h3>Foremost ltem Collections classic</h3>
			</div>
			<motion.div
				ref={carousel}
				className='carousel'
				whileTap={{ cursor: 'grabbing' }}
			>
				<motion.div
					drag='x'
					dragConstraints={{ right: 0, left: -width }}
					className='innerCarousel'
				>
					{images.map(image => {
						return (
							<motion.div className='item' key={image}>
								<img src={image} alt='' />
							</motion.div>
						)
					})}
				</motion.div>
			</motion.div>
		</div>
	)
}

export default Carousdown
