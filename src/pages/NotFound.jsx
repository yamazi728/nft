import { useNavigate } from 'react-router-dom'
const NotFound = () => {
	const navigate = useNavigate()
	return (
		<div style={{ backgroundColor: '#181828', overflow: 'hidden' }}>
			<header className='top-header'></header>

			<div>
				<div className='starsec'></div>
				<div className='starthird'></div>
				<div className='starfourth'></div>
				<div className='starfifth'></div>
			</div>

			<div className='lamp__wrap'>
				<div className='lamp'>
					<div className='cable'></div>
					<div className='cover'></div>
					<div className='in-cover'>
						<div className='bulb'></div>
					</div>
					<div className='light'></div>
				</div>
			</div>
			<section className='error'>
				<div className='error__content'>
					<div className='error__message message'>
						<h1 className='message__title'>Page Not Found</h1>
						<p className='message__text'>
							We're sorry, the page you were looking for isn't found here. The
							link you followed may either be broken or no longer exists. Please
							try again, or take a look at our.
						</p>
					</div>
					<div className='error__nav e-nav'>
						<a
							onClick={() => navigate(`/`)}
							href=''
							target='_blanck'
							className='e-nav__link'
						></a>
					</div>
				</div>
			</section>
		</div>
	)
}

export default NotFound

// const NotFound = () => {
// 	return (
// 		<div>
// 			<p>hover the light</p>

// 			<div id='fish_box'>
// 				<div class='light'></div>
// 				<div id='fish'>
// 					<div class='light_dongle'></div>
// 					<div class='fin top'>ничего </div>
// 					<div class='fin bottom'>найдено</div>
// 					<div class='tail back'>здесь</div>
// 					<div class='tail middle'>не</div>
// 					<div class='teeth upper'> </div>
// 					<div class='teeth lower'></div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default NotFound
