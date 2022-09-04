import image1 from '../assets/png/image1.png'
import image2 from '../assets/png/image2.png'
import Carousel from '../components/Carousel'
import Slider from '../components/slider/Slider'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Categories from '../components/Categories'
import Paginate from '../components/Paginate/Paginate'
import Sort from '../components/Sort'
import { setCategoryId } from '../redux/slices/filterSlice'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Footer from '../components/Footer'
import HeadSlide from '../components/HeadSlide'
import Navigate from '../components/Navigate'
import PrevFoot from '../components/PrevFoot'
import Prevfoot2 from '../components/Prevfoot2'
import NftBlock from '../components/NftBlock'
import NftSkeleton from '../components/NftBlock/NftSkeleton'
import SendEmail from '../components/SendEmail'
import { Parallax } from 'react-parallax'
import { useNavigate } from 'react-router-dom'

const Main = () => {
	const dispatch = useDispatch()
	const categoryId = useSelector(state => state.filter.categoryId)
	const sortType = useSelector(state => state.filter.sort.sortProperty)
	const searchValue = useSelector(state => state.search.searchValue)

	const [loading, setLoading] = useState(true)
	const [products, setProducts] = useState([])
	const [currentPage, setCurrentPage] = useState(1)

	useEffect(() => {
		setLoading(true)

		const category = categoryId > 0 ? `category=${categoryId}` : ''
		const order = sortType.includes('-') ? 'asc' : 'desc'
		const sortBy = sortType.replace('-', '')
		const search = searchValue ? `&search=${searchValue}` : ''

		axios
			.get(
				`https://62ea7ae63a5f1572e87ca426.mockapi.io/nft?page=${currentPage}&limit=30&${category}&sortBy=${sortBy}&order=${order}${search}`
			)
			.then(res => {
				setProducts(res.data)
				setLoading(false)
			})

		window.scrollTo(0, 0)
	}, [categoryId, sortType, searchValue, currentPage])

	const changeCategory = i => {
		dispatch(setCategoryId(i))
	}

	const loadingSkeleton = [...new Array(5)].map((_, index) => (
		<NftSkeleton key={index} />
	))

	const productsItems = products
		.filter(item =>
			item.title
				.toLowerCase()
				.replace(/ /g, '')
				.includes(searchValue.toLowerCase().replace(/ /g, ''))
		)
		.map(product => <NftBlock key={product.id} {...product} />)

	return (
		<div className='main'>
			<div className='main-content1'>
				<span>The NFT marketplace witch everything for everyone</span>
				<h1>
					Discovery <img src={image2} alt='' /> Collect
				</h1>
				<h2>
					<img src={image1} alt='' />
					And Shell
				</h2>
				<HeadSlide />
				<h3>
					Remarkable NFTs.
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
				</h3>
			</div>
			{/* <div className='main-content2'>
				<div>
					<span>
						Find digital artwork by <br />
						professionals and discover <br />s the true meaning of the <br />
						<img src={image3} alt='' />
					</span>
					<h2>
						Duis aute irure dolor in reprehenderit in voluptate, nam libero
					</h2>
				</div>
			</div> */}
			<Slider />
			<Carousel />
			<h1 className='Marketplace'>Marketplace</h1>
			<Link to='/products'>
				<button className='btn'>See more...</button>
				<div className='content__top'>
					<Categories value={categoryId} onChangeCategory={changeCategory} />
					<Sort />
				</div>

				<h2 className='content__title'>Сhoose your NFT</h2>
				<div className='content__items'>
					{loading ? loadingSkeleton : productsItems}
				</div>
				{products.length > 4 ? (
					<Paginate onChangePage={number => setCurrentPage(number)} />
				) : null}
			</Link>

			<PrevFoot />
			<Parallax
				style={{ height: '40vh', marginTop: '100px' }}
				bgImage='https://wallpaperaccess.com/full/2825704.gif'
				strength={400}
			>
				<section id='banner' className='section-m1'>
					<h4>NFT IS THE FUTURE BUSINESS</h4>
					<h2>
						Up to <span>70% Off</span> - All NFT'S & Accessories
					</h2>
				</section>
			</Parallax>
			<Navigate />
			<SendEmail />

			<Prevfoot2 />
			<Footer />
		</div>
	)
}

export default Main
