import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<div>
			<div className='header'>
				<div className='header-logo'>
					<Link to='/'>
						<h1>
							Searcher
							<svg
								width='19'
								height='19'
								viewBox='0 0 19 19'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M9.5 0L11.6966 7.30337L19 9.5L11.6966 11.6966L9.5 19L7.30337 11.6966L0 9.5L7.30337 7.30337L9.5 0Z'
									fill='#FE974F'
								/>
							</svg>
						</h1>
					</Link>
				</div>
				<div className='header-menu'>
					<ul>
						<li>Explore</li>
						<li>Stats</li>
						<li>Resources</li>
						<li>Create</li>
					</ul>
				</div>
				<div className='header-profile'>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<circle cx='12' cy='8' r='4' stroke='white' />
						<path
							d='M18 18.7059C17.6461 17.6427 16.8662 16.7033 15.7814 16.0332C14.6966 15.3632 13.3674 15 12 15C10.6326 15 9.30341 15.3632 8.21858 16.0332C7.13375 16.7033 6.35391 17.6427 6 18.7059'
							stroke='white'
							// stroke-linecap='round'
						/>
						<path
							d='M6 19C6.35391 20.0632 7.13375 21.0026 8.21858 21.6727C9.30341 22.3427 10.6326 22.7059 12 22.7059C13.3674 22.7059 14.6966 22.3427 15.7814 21.6727C16.8662 21.0026 17.6461 20.0632 18 19'
							stroke='white'
							// stroke-linecap='round'
						/>
					</svg>
				</div>
			</div>
		</div>
	)
}

export default Header
