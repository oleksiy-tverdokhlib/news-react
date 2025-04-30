import React from 'react'
import styles from './NewsByFilter.module.css'
import Pagination from '../Pagination/Pagination'
import NewsListWithSkeleton from '../NewsList/NewsList'
import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constants'
import NewsFilters from '../NewsFilters/NewsFilters'
import { useFetch } from '../../helpers/hooks/useFetch'
import { useDebounce } from '../../helpers/hooks/useDebounce'
import { useFilters } from '../../helpers/hooks/useFilters'
import { getNews } from '../../api/apiNews'
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper'
import { NewsApiResponse, ParamsType } from '../../interfaces'

const NewsByFilter = () => {
	const { filters, changeFilter } = useFilters({
		page_number: 1,
		page_size: PAGE_SIZE,
		category: null,
		keywords: '',
	})

	const debouncedKeywords = useDebounce(filters.keywords, 1500)

	const { data, isLoading } = useFetch<ParamsType, NewsApiResponse>(getNews, {
		...filters,
		keywords: debouncedKeywords,
	})

	const handleNextPage = () => {
		if (filters.page_number < TOTAL_PAGES) {
			changeFilter('page_number', filters.page_number + 1)
		}
	}
	const handlePreviousPage = () => {
		if (filters.page_number > 1) {
			changeFilter('page_number', filters.page_number - 1)
		}
	}

	const handlePageClick = (pagenumber: number) => {
		changeFilter('page_number', pagenumber)
	}

	return (
		<section className={styles.section}>
			<NewsFilters filters={filters} changeFilter={changeFilter} />
			<PaginationWrapper
				top={true}
				bottom={true}
				totalPages={TOTAL_PAGES}
				handleNextPage={handleNextPage}
				handlePreviousPage={handlePreviousPage}
				handlePageClick={handlePageClick}
				currentPage={filters.page_number}
			>
				<NewsListWithSkeleton isLoading={isLoading} news={data?.news} />
			</PaginationWrapper>
		</section>
	)
}

export default NewsByFilter
