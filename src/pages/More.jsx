import React from 'react'
import { Parallax } from 'react-parallax'
import { Navigate } from 'react-router-dom'

const More = () => {
	return (
		<div>
			<div className='more'>
				<div className='more-info'>
					<Parallax
						style={{ width: '100%' }}
						bgImage='https://images7.alphacoders.com/617/617537.jpg'
						strength={-400}
					>
						<section id='hero'>
							<div className='hero-text'>
								<h2>Super value deals</h2>
								<h1 id='h-color'>Here are 3 questions </h1>
								<p id='p-h-color'>just buy it and relax</p>
								<button onClick={() => Navigate(`/main`)} variant='outlined'>
									Shop Now
								</button>
							</div>
						</section>
					</Parallax>
					<h1>Everything You Need to Know About NFTs</h1>
					<span>
						NFTs are among the hottest crypto trends of 2021, combining unique
						art with cutting-edge technology and more. The key element of NFTs
						is the technical ability to separate the original artist’s creation
						from mere copies. The same technology makes it possible to verify
						the owner of the original artwork, which turned out to be extremely
						valuable in the online space in which digital copies can be made
						very easily.
					</span>
					<h2>What Is an NFT and What Is It Good For?</h2>
					<span>
						An NFT is a non-fungible token. While 1 BTC or ETH is equal to any
						other unit of the same cryptocurrency or can be split into smaller
						units, each NFT is completely unique – it represents only itself and
						cannot be automatically exchanged. At the same time, an NFT can have
						a price determined by the market, but we will come back to that
						later. An NFT is a digital certificate confirming the ownership of a
						particular digital asset. The token itself does not contain an
						artwork but only a link to it and a smart contract that defines the
						owner’s rights and ability to manage the asset. Information about
						all owners can be found on the blockchain network. NFTs were
						originally conceived as a technical means for authors to control
						their own works in the digital sphere, where piracy or intellectual
						property theft is a problem, but in practice, things turned out
						differently.
					</span>
					<h3>What Is the Use of an NFT Now?</h3>
					<span>
						Proto-NFTs already existed in the early 2010s, but the first NFT
						projects began to emerge in their current form in 2017. They were
						facilitated by the development of infrastructure and the
						technological base of decentralized apps and the general growth in
						value of cryptocurrency projects. The lion’s share of the credit
						goes to CryptoKitties, a game based on the Ethereum blockchain
						network. The game allows you to breed, sell and buy unique kitties
						implemented as NFTs. At the end of 2017, just one month after its
						release, digital kitties were already being sold for $100,000. This
						case has boosted the development of NFTs and the infrastructure
						associated with these tokens in general.
					</span>
				</div>
			</div>
		</div>
	)
}

export default More
