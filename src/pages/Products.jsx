import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cart from '../components/Cart/Cart'
import Categories from '../components/Categories'
import NftBlock from '../components/NftBlock'
import NftSkeleton from '../components/NftBlock/NftSkeleton'
import Paginate from '../components/Paginate/Paginate'
import Searching from '../components/Searching/Searching'
import Sort from '../components/Sort'
import { setCategoryId } from '../redux/slices/filterSlice'

const Products = () => {
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
				`https://62ea7ae63a5f1572e87ca426.mockapi.io/nft?page=${currentPage}&limit=5&${category}&sortBy=${sortBy}&order=${order}${search}`
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
		<>
			<Searching />

			<div className='cart-block'></div>
			<div className='content__top'>
				<Categories value={categoryId} onChangeCategory={changeCategory} />
				<Sort />
			</div>

			<h2 className='content__title'>Сhoose your NFT </h2>

			<div className='content__items'>
				{loading ? loadingSkeleton : productsItems}
			</div>
			{products.length > 4 ? (
				<Paginate onChangePage={number => setCurrentPage(number)} />
			) : null}

			{/* <Parallax /> */}
		</>
	)
}
export default Products
