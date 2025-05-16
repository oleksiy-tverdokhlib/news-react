import { useAppSelector } from '@/app/appStore'
import { useGetCategoriesQuery } from '@/entities/category/api/api'
import { useGetNewsQuery } from '@/entities/news/api/api'
import { useDebounce } from '@/shared/hooks/useDebounce'
import { NewsFilters } from '@/widgets/news'
import NewsListWithPagination from '../NewsListWithPagination/NewsListWithPagination'
import styles from './NewsByFilter.module.css'

const NewsByFilter = () => {
	const { data } = useGetCategoriesQuery(null)
	const filters = useAppSelector((state) => state.news.filters)
	const news = useAppSelector((state) => state.news.news)

	const debouncedKeywords = useDebounce(filters.keywords, 1500)

	const { isLoading } = useGetNewsQuery({
		...filters,
		keywords: debouncedKeywords,
	})

	return (
		<section className={styles.section}>
			<NewsFilters categories={data?.categories || []} filters={filters} />
			<NewsListWithPagination
				filters={filters}
				news={news}
				isLoading={isLoading}
			/>
		</section>
	)
}

export default NewsByFilter
