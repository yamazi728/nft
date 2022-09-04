import { useDispatch } from 'react-redux'
import styles from './Searching.module.scss'
import {
	setSearchValue,
	removeSearchValue,
} from '../../redux/slices/searchSlice'
import { useRef } from 'react'
import { debounce } from 'lodash'
import { useCallback } from 'react'
import { useState } from 'react'
import Cart from '../Cart/Cart'
const Searching = () => {
	const [value, setValue] = useState('')
	const dispatch = useDispatch()

	const inputRef = useRef()

	// const updateSearchValue = debounce(str => {
	// 	console.log(str)
	// }, 1500)

	const updateSearchValue = useCallback(
		debounce(str => {
			dispatch(setSearchValue(str))
		}, 1000),
		[]
	)
	const changeInputValue = event => {
		setValue(event.target.value)
		updateSearchValue(event.target.value)
	}
	const removeSearch = () => {
		setValue('')
		dispatch(removeSearchValue())
		inputRef.current.focus()
	}
	return (
		<div>
			<div>
				<Cart />
			</div>
			<div className={styles.searchBlock}>
				<svg
					version='1.1'
					id='Capa_1'
					xmlns='http://www.w3.org/2000/svg'
					xmlnsXlink='http://www.w3.org/1999/xlink'
					x='0px'
					y='0px'
					width='632.399px'
					height='632.399px'
					viewBox='0 0 632.399 632.399'
				>
					<g>
						<path
							d='M255.108,0C119.863,0,10.204,109.66,10.204,244.904c0,135.245,109.659,244.905,244.904,244.905
    c52.006,0,100.238-16.223,139.883-43.854l185.205,185.176c1.671,1.672,4.379,1.672,5.964,0.115l34.892-34.891
    c1.613-1.613,1.47-4.379-0.115-5.965L438.151,407.605c38.493-43.246,61.86-100.237,61.86-162.702
    C500.012,109.66,390.353,0,255.108,0z M255.108,460.996c-119.34,0-216.092-96.752-216.092-216.092
    c0-119.34,96.751-216.091,216.092-216.091s216.091,96.751,216.091,216.091C471.199,364.244,374.448,460.996,255.108,460.996z'
						/>
					</g>
				</svg>
				<input
					ref={inputRef}
					placeholder="Searching NFT'S"
					value={value}
					onChange={changeInputValue}
				/>

				{value && (
					<svg
						onClick={() => removeSearch()}
						enableBackground='new 0 0 40 40'
						id='Слой_1'
						version='1.1'
						viewBox='0 0 40 40'
					>
						<g>
							<path d='M28,40H11.8c-3.3,0-5.9-2.7-5.9-5.9V16c0-0.6,0.4-1,1-1s1,0.4,1,1v18.1c0,2.2,1.8,3.9,3.9,3.9H28c2.2,0,3.9-1.8,3.9-3.9V16   c0-0.6,0.4-1,1-1s1,0.4,1,1v18.1C33.9,37.3,31.2,40,28,40z' />
						</g>
						<g>
							<path d='M33.3,4.9h-7.6C25.2,2.1,22.8,0,19.9,0s-5.3,2.1-5.8,4.9H6.5c-2.3,0-4.1,1.8-4.1,4.1S4.2,13,6.5,13h26.9   c2.3,0,4.1-1.8,4.1-4.1S35.6,4.9,33.3,4.9z M19.9,2c1.8,0,3.3,1.2,3.7,2.9h-7.5C16.6,3.2,18.1,2,19.9,2z M33.3,11H6.5   c-1.1,0-2.1-0.9-2.1-2.1c0-1.1,0.9-2.1,2.1-2.1h26.9c1.1,0,2.1,0.9,2.1,2.1C35.4,10.1,34.5,11,33.3,11z' />
						</g>
						<g>
							<path d='M12.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,1-1s1,0.4,1,1v16.7C13.9,34.6,13.4,35.1,12.9,35.1z' />
						</g>
						<g>
							<path d='M26.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,1-1s1,0.4,1,1v16.7C27.9,34.6,27.4,35.1,26.9,35.1z' />
						</g>
						<g>
							<path d='M19.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,1-1s1,0.4,1,1v16.7C20.9,34.6,20.4,35.1,19.9,35.1z' />
						</g>
					</svg>
				)}
			</div>
		</div>
	)
}

export default Searching
