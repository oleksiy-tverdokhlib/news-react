import React from 'react'
import styles from './Main.module.css'
import { getNews } from './../../api/apiNews'
import { useDebounce } from '../../helpers/hooks/useDebounce'
import { PAGE_SIZE } from './../../constants/constants'
import { useFetch } from '../../helpers/hooks/useFetch'
import { useFilters } from '../../helpers/hooks/useFilters'
import LatestNews from '../../components/LatestNews/LatestNews'
import NewsByFilter from '../../components/NewsByFilter/NewsByFilter'

const Main = () => {
	const { filters, changeFilter } = useFilters({
		page_number: 1,
		page_size: PAGE_SIZE,
		category: null,
		keywords: '',
	})

	const debouncedKeywords = useDebounce(filters.keywords, 1500)

	const { data, isLoading } = useFetch(getNews, {
		...filters,
		keywords: debouncedKeywords,
	})

	return (
		<main className={styles.main}>
			<LatestNews isLoading={isLoading} banners={data && data.news} />

			<NewsByFilter
				isLoading={isLoading}
				news={data?.news}
				changeFilter={changeFilter}
				filters={filters}
			/>
		</main>
	)
}

export default Main
