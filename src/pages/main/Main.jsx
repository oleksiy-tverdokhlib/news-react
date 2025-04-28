import React, { useEffect, useState } from 'react'
import styles from './Main.module.css'
import NewsList from './../../components/NewsList/NewsList'
import Skeleton from './../../components/Skeleton/Skeleton'
import { getCategories, getNews } from './../../api/apiNews'
import Pagination from '../../components/Pagination/Pagination'
import NewsBanner from './../../components/NewsBanner/NewsBanner'
import Categories from '../../components/Categories/Categories'

const Main = () => {
	const [news, setNews] = useState([])
	const [categories, setCategories] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [currentPage, setCurentPage] = useState(1)
	const [selectedCategory, setSelectedCategory] = useState('All')
	const totalPages = 10
	const pageSize = 10

	const fetchNews = async (currentPage) => {
		try {
			setIsLoading(true)
			const resonse = await getNews({
				page_number: currentPage,
				page_size: pageSize,
				category: selectedCategory === 'All' ? null : selectedCategory,
			})
			setNews(resonse.news)
			setIsLoading(false)
		} catch (error) {
			console.log(error)
		}
	}

	const fetchCategories = async () => {
		try {
			const resonse = await getCategories()
			setCategories(['All', ...resonse.categories])
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		// fetchCategories()
	}, [])

	useEffect(() => {
		// fetchNews(currentPage)
	}, [currentPage, selectedCategory])

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurentPage(currentPage + 1)
		}
	}
	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setCurentPage(currentPage - 1)
		}
	}

	const handlePageClick = (pagenumber) => {
		setCurentPage(pagenumber)
	}

	return (
		<main className={styles.main}>
			<Categories
				categories={categories}
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
			/>

			{news.length > 0 && !isLoading ? (
				<NewsBanner item={news[0]} />
			) : (
				<Skeleton count={1} type={'banner'} />
			)}
			<Pagination
				totalPages={totalPages}
				handleNextPage={handleNextPage}
				handlePreviousPage={handlePreviousPage}
				handlePageClick={handlePageClick}
				currentPage={currentPage}
			/>
			{!isLoading ? (
				<NewsList news={news} />
			) : (
				<Skeleton count={10} type={'item'} />
			)}
			<Pagination
				totalPages={totalPages}
				handleNextPage={handleNextPage}
				handlePreviousPage={handlePreviousPage}
				handlePageClick={handlePageClick}
				currentPage={currentPage}
			/>
		</main>
	)
}

export default Main
