import React, { useEffect, useState } from 'react'
import styles from './Main.module.css'
import NewsList from './../../components/NewsList/NewsList'
import Skeleton from './../../components/Skeleton/Skeleton'
import { getNews } from './../../api/apiNews'
import Pagination from '../../components/Pagination/Pagination'

const Main = () => {
	const [news, setNews] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [currentPage, setCurentPage] = useState(1)
	const totalPages = 10
	const pageSize = 10

	console.log(news)
	const fetchNews = async (currentPage) => {
		try {
			setIsLoading(true)
			const resonse = await getNews(currentPage, pageSize)
			setNews(resonse.news)
			setIsLoading(false)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchNews(currentPage)
	}, [currentPage])

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
