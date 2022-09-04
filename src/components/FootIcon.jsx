const FootIcon = () => {
	return (
		<div>
			<ul className='wrappe'>
				<li className='icon facebook'>
					<span className='tooltip'>Facebook</span>
					<span>
						<i className='fab fa-facebook-f'>
							<a href='https://facebook.com'>
								<img src='https://img.icons8.com/ios/50/000000/facebook-new.png' />
							</a>
						</i>
					</span>
				</li>
				<li className='icon twitter'>
					<span className='tooltip'>Twitter</span>
					<span>
						<i className='fab fa-twitter'>
							<a href='https://twitter.com'>
								<img src='https://img.icons8.com/ios/38/000000/twitter--v1.png' />
							</a>
						</i>
					</span>
				</li>
				<li className='icon instagram'>
					<span className='tooltip'>Instagram</span>
					<span>
						<i className='fab fa-instagram'>
							<a href='https://instagram.com'>
								<img src='https://img.icons8.com/ios/38/000000/instagram-new--v1.png' />
							</a>
						</i>
					</span>
				</li>
				<li className='icon github'>
					<span className='tooltip'>Github</span>
					<span>
						<i className='fab fa-github'>
							<a href='https://github.com'>
								<img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMmM1LjUxNCAwIDEwIDQuNDg2IDEwIDEwcy00LjQ4NiAxMC0xMCAxMC0xMC00LjQ4Ni0xMC0xMCA0LjQ4Ni0xMCAxMC0xMHptMC0yYy02LjYyNyAwLTEyIDUuMzczLTEyIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyLTUuMzczLTEyLTEyLTEyem0wIDZjLTMuMzEzIDAtNiAyLjY4Ni02IDYgMCAyLjY1MSAxLjcxOSA0LjkgNC4xMDQgNS42OTMuMy4wNTYuMzk2LS4xMy4zOTYtLjI4OXYtMS4xMTdjLTEuNjY5LjM2My0yLjAxNy0uNzA3LTIuMDE3LS43MDctLjI3Mi0uNjkzLS42NjYtLjg3OC0uNjY2LS44NzgtLjU0NC0uMzczLjA0MS0uMzY1LjA0MS0uMzY1LjYwMy4wNDIuOTIuNjE5LjkyLjYxOS41MzUuOTE3IDEuNDAzLjY1MiAxLjc0Ni40OTkuMDU0LS4zODguMjA5LS42NTIuMzgxLS44MDItMS4zMzMtLjE1Mi0yLjczMy0uNjY3LTIuNzMzLTIuOTY1IDAtLjY1NS4yMzQtMS4xOS42MTgtMS42MS0uMDYyLS4xNTMtLjI2OC0uNzY0LjA1OC0xLjU5IDAgMCAuNTA0LS4xNjEgMS42NS42MTUuNDc5LS4xMzMuOTkyLS4xOTkgMS41MDItLjIwMi41MS4wMDIgMS4wMjMuMDY5IDEuNTAzLjIwMiAxLjE0Ni0uNzc2IDEuNjQ4LS42MTUgMS42NDgtLjYxNS4zMjcuODI2LjEyMSAxLjQzNy4wNiAxLjU4OC4zODUuNDIuNjE3Ljk1NS42MTcgMS42MSAwIDIuMzA1LTEuNDA0IDIuODEyLTIuNzQgMi45Ni4yMTYuMTg2LjQxMi41NTEuNDEyIDEuMTExdjEuNjQ2YzAgLjE2LjA5Ni4zNDcuNC4yODggMi4zODMtLjc5MyA0LjEtMy4wNDEgNC4xLTUuNjkxIDAtMy4zMTQtMi42ODctNi02LTZ6Ii8+PC9zdmc+'></img>
							</a>
						</i>
					</span>
				</li>
				<li className='icon youtube'>
					<span className='tooltip'>Youtube</span>
					<span>
						<i className='fab fa-youtube'>
							<a href='https://youtube.com'>
								<img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNC42NTIgMGgxLjQ0bC45ODggMy43MDIuOTE2LTMuNzAyaDEuNDU0bC0xLjY2NSA1LjUwNXYzLjc1N2gtMS40MzF2LTMuNzU3bC0xLjcwMi01LjUwNXptNi41OTQgMi4zNzNjLTEuMTE5IDAtMS44NjEuNzQtMS44NjEgMS44MzV2My4zNDljMCAxLjIwNC42MjkgMS44MzEgMS44NjEgMS44MzEgMS4wMjIgMCAxLjgyNi0uNjgzIDEuODI2LTEuODMxdi0zLjM0OWMwLTEuMDY5LS43OTctMS44MzUtMS44MjYtMS44MzV6bS41MzEgNS4xMjdjMCAuMzcyLS4xOS42NDYtLjUzMi42NDYtLjM1MSAwLS41NTQtLjI4Ny0uNTU0LS42NDZ2LTMuMTc5YzAtLjM3NC4xNzItLjY1MS41MjktLjY1MS4zOSAwIC41NTcuMjY5LjU1Ny42NTF2My4xNzl6bTQuNzI5LTUuMDd2NS4xODZjLS4xNTUuMTk0LS41LjUxMi0uNzQ3LjUxMi0uMjcxIDAtLjMzOC0uMTg2LS4zMzgtLjQ2di01LjIzOGgtMS4yN3Y1LjcxYzAgLjY3NS4yMDYgMS4yMi44ODcgMS4yMi4zODQgMCAuOTE4LS4yIDEuNDY4LS44NTN2Ljc1NGgxLjI3di02LjgzMWgtMS4yN3ptMi4yMDMgMTMuODU4Yy0uNDQ4IDAtLjU0MS4zMTUtLjU0MS43NjN2LjY1OWgxLjA2OXYtLjY2Yy4wMDEtLjQ0LS4wOTItLjc2Mi0uNTI4LS43NjJ6bS00LjcwMy4wNGMtLjA4NC4wNDMtLjE2Ny4xMDktLjI1LjE5OHY0LjA1NWMuMDk5LjEwNi4xOTQuMTgyLjI4Ny4yMjkuMTk3LjEuNDg1LjEwNy42MTktLjA2Ny4wNy0uMDkyLjEwNS0uMjQxLjEwNS0uNDQ5di0zLjM1OWMwLS4yMi0uMDQzLS4zODYtLjEyOS0uNS0uMTQ3LS4xOTMtLjQyLS4yMTQtLjYzMi0uMTA3em00LjgyNy01LjE5NWMtMi42MDQtLjE3Ny0xMS4wNjYtLjE3Ny0xMy42NjYgMC0yLjgxNC4xOTItMy4xNDYgMS44OTItMy4xNjcgNi4zNjcuMDIxIDQuNDY3LjM1IDYuMTc1IDMuMTY3IDYuMzY3IDIuNi4xNzcgMTEuMDYyLjE3NyAxMy42NjYgMCAyLjgxNC0uMTkyIDMuMTQ2LTEuODkzIDMuMTY3LTYuMzY3LS4wMjEtNC40NjctLjM1LTYuMTc1LTMuMTY3LTYuMzY3em0tMTIuMzI0IDEwLjY4NmgtMS4zNjN2LTcuNTRoLTEuNDF2LTEuMjhoNC4xODJ2MS4yOGgtMS40MXY3LjU0em00Ljg0NiAwaC0xLjIxdi0uNzE4Yy0uMjIzLjI2NS0uNDU1LjQ2Ny0uNjk2LjYwNS0uNjUyLjM3NC0xLjU0Ny4zNjUtMS41NDctLjk1NXYtNS40MzhoMS4yMDl2NC45ODhjMCAuMjYyLjA2My40MzguMzIyLjQzOC4yMzYgMCAuNTY0LS4zMDMuNzExLS40ODd2LTQuOTM5aDEuMjF2Ni41MDZ6bTQuNjU3LTEuMzQ4YzAgLjgwNS0uMzAxIDEuNDMxLTEuMTA2IDEuNDMxLS40NDMgMC0uODEyLS4xNjItMS4xNDktLjU4M3YuNWgtMS4yMjF2LTguODJoMS4yMjF2Mi44NGMuMjczLS4zMzMuNjQ0LS42MDggMS4wNzYtLjYwOC44ODYgMCAxLjE4Ljc0OSAxLjE4IDEuNjMxdjMuNjA5em00LjQ3MS0xLjc1MmgtMi4zMTR2MS4yMjhjMCAuNDg4LjA0Mi45MS41MjguOTEuNTExIDAgLjU0MS0uMzQ0LjU0MS0uOTF2LS40NTJoMS4yNDV2LjQ4OWMwIDEuMjUzLS41MzggMi4wMTMtMS44MTMgMi4wMTMtMS4xNTUgMC0xLjc0Ni0uODQyLTEuNzQ2LTIuMDEzdi0yLjkyMWMwLTEuMTI5Ljc0Ni0xLjkxNCAxLjgzNy0xLjkxNCAxLjE2MSAwIDEuNzIxLjczOCAxLjcyMSAxLjkxNHYxLjY1NnoiLz48L3N2Zz4='></img>
							</a>
						</i>
					</span>
				</li>
			</ul>
		</div>
	)
}

export default FootIcon
