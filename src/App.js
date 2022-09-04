import Main from './pages/Main'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'

import { createContext, useState } from 'react'
import Products from './pages/Products'
import Header from './components/Header'
import NotFound from './pages/NotFound'
import './scss/app.scss'
import Wallet from './pages/Wallet'
import More from './pages/More'
export const SearchContext = createContext()

const App = () => {
	const [searchValue, setSearchValue] = useState('')

	return (
		<div className='wrapper'>
			<SearchContext.Provider value={{ searchValue, setSearchValue }}>
				<Header />
				<div className='content'>
					<div className='container'>
						<Routes>
							<Route path='/' element={<Main />} />
							<Route path='/products' element={<Products />} />
							<Route path='*' element={<NotFound />} />
							<Route path='/wallet' element={<Wallet />} />
							<Route path='/more' element={<More />} />
						</Routes>
					</div>
				</div>
			</SearchContext.Provider>
		</div>
		// <div className='wrapper'>
		// 	<Header />
		// 	<div className='content'>
		// 		<div className='container'>
		// 			<Main />
		// 		</div>
		// 	</div>
		// </div>
	)
}

export default App
