import { INews } from '@/entities/news'
import PaginationWrapper from '@/features/pagination/ui/Pagination/Pagination'
import { TOTAL_PAGES } from '@/shared/constants/constants'
import { IFilters } from '@/shared/interfaces'
import { NewsList } from '@/widgets/news'
import { usePaginationNews } from '../../utils/hooks/usePaginationNews'

interface Props {
	filters: IFilters
	news: INews[]
	isLoading: boolean
}

const NewsListWithPagination = ({ filters, news, isLoading }: Props) => {
	const { handleNextPage, handlePreviousPage, handlePageClick } =
		usePaginationNews(filters)

	return (
		<PaginationWrapper
			top={true}
			bottom={true}
			totalPages={TOTAL_PAGES}
			handleNextPage={handleNextPage}
			handlePreviousPage={handlePreviousPage}
			handlePageClick={handlePageClick}
			currentPage={filters.page_number}
		>
			<NewsList
				type="item"
				direction="column"
				isLoading={isLoading}
				news={news}
			/>
		</PaginationWrapper>
	)
}

export default NewsListWithPagination
