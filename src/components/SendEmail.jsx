import React from 'react'

const SendEmail = () => {
	return (
		<div>
			<div className='send-email'>
				<div className='send-email-wrapper'>
					<div className='send-email-wrapper-form'>
						<h4>Don’t miss anything</h4>
						<h2>Subscribe to the NFT channel for a sale</h2>

						<form
							class='form'
							action='https://formsubmit.co/batyrbekovalmaz42@gmail.com'
							method='POST'
						>
							<input type='hidden' name='_captcha' value='false' />
							<input
								type='hidden'
								name='_next'
								value='http://127.0.0.1:5500/public/index.html?'
							/>
							<input
								type='email'
								name='email'
								placeholder='Your working email'
								required
							/>
							<button type='submit' class='btn'>
								Subscribe
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SendEmail
