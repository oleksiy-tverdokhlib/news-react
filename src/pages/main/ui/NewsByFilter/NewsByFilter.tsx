import { useAppDispatch, useAppSelector } from '@/app/appStore'
import PaginationWrapper from '@/features/pagination/ui/Pagination/Pagination'
import { TOTAL_PAGES } from '@/shared/constants/constants'
import { useGetNewsQuery } from '@/entities/news/api/api'
import { setFilters } from '@/entities/news/model/slice'
import { useDebounce } from '@/shared/hooks/useDebounce'
import NewsListWithSkeleton from '@/widgets/news/ui/NewsList/NewsList'
import NewsFilters from '../NewsFilters/NewsFilters'
import styles from './NewsByFilter.module.css'

const NewsByFilter = () => {
	const dispatch = useAppDispatch()
	const filters = useAppSelector((state) => state.news.filters)
	const news = useAppSelector((state) => state.news.news)

	const debouncedKeywords = useDebounce(filters.keywords, 1500)

	const { isLoading } = useGetNewsQuery({
		...filters,
		keywords: debouncedKeywords,
	})

	const handleNextPage = () => {
		if (filters.page_number < TOTAL_PAGES) {
			dispatch(
				setFilters({ key: 'page_number', value: filters.page_number + 1 })
			)
		}
	}
	const handlePreviousPage = () => {
		if (filters.page_number > 1) {
			dispatch(
				setFilters({ key: 'page_number', value: filters.page_number - 1 })
			)
		}
	}

	const handlePageClick = (pagenumber: number) => {
		dispatch(setFilters({ key: 'page_number', value: pagenumber }))
	}

	return (
		<section className={styles.section}>
			<NewsFilters filters={filters} />
			<PaginationWrapper
				top={true}
				bottom={true}
				totalPages={TOTAL_PAGES}
				handleNextPage={handleNextPage}
				handlePreviousPage={handlePreviousPage}
				handlePageClick={handlePageClick}
				currentPage={filters.page_number}
			>
				<NewsListWithSkeleton isLoading={isLoading} news={news} />
			</PaginationWrapper>
		</section>
	)
}

export default NewsByFilter
