import { Box, Button, TextField, Typography } from '@mui/material'
import FootIcon from './FootIcon'

const Footer = () => {
	return (
		<div className='footer-1'>
			<div style={{ height: '15vh' }}></div>
			<div className='footer-2'>
				<div className='footer-3'>
					<div className='footer-4'>
						<Typography variant='h5'>Thank for buying our NFT</Typography>
						<br />
						<Typography variant='h2'>YOU are welcome to iur website</Typography>
					</div>
					<div className='footer-5'>
						<Button className='footer-btn1'>Get started</Button>
					</div>
				</div>
			</div>

			<div
				className='respons'
				style={{
					backgroundColor: '#5b8291',
					height: '35vh',
					display: 'flex',
					justifyContent: 'space-evenly',
					width: '100%',
				}}
			>
				<div
					className='for-hover'
					style={{
						marginTop: '50px',
						color: 'white',
						display: 'flex',
						justifyContent: 'space-evenly',
						flexDirection: 'column',
					}}
				>
					<Typography variant='h4' style={{ marginBottom: '20px' }}>
						Searching
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
					</Typography>
					<Typography variant='subtitle'>Home</Typography>
					<Typography variant='subtitle'>Get in touch</Typography>
					<Typography variant='subtitle'>FAQs</Typography>
					<FootIcon />
				</div>
				<div
					className='for-hover'
					style={{
						marginTop: '50px',
						color: 'white',
						display: 'flex',
						justifyContent: 'space-evenly',
						flexDirection: 'column',
					}}
				>
					<Typography variant='h5' style={{ marginBottom: '20px' }}>
						About us
					</Typography>
					<Typography variant='subtitle'>Home</Typography>
					<Typography variant='subtitle'>Get in touch</Typography>
					<Typography variant='subtitle'>FAQs</Typography>
				</div>
				<div
					className='for-hover'
					style={{
						marginTop: '50px',
						color: 'white',
						display: 'flex',
						justifyContent: 'space-evenly',
						flexDirection: 'column',
					}}
				>
					<Typography variant='h5' style={{ marginBottom: '20px' }}>
						Lorem ipsum dolor sit amet.
					</Typography>
					<Box>
						<TextField
							size='small'
							variant='outlined'
							label='Email'
							style={{
								height: '30px',
								marginRight: '10px',
								color: 'white',
							}}
						/>
						<Button
							style={{ backgroundColor: 'rgb(109, 73, 245)', color: 'white' }}
						>
							Subscribe
						</Button>
					</Box>
				</div>
			</div>
		</div>
	)
}

export default Footer
