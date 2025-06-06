import { useAppDispatch } from '@/app/appStore'
import { setFilters } from '@/entities/news/model/slice'
import { TOTAL_PAGES } from '@/shared/constants/constants'
import { IFilters } from '@/shared/interfaces'

export const usePaginationNews = (filters: IFilters) => {
	const dispatch = useAppDispatch()

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

	return {
		handleNextPage,
		handlePreviousPage,
		handlePageClick,
	}
}
